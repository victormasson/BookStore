using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotnetApi.Database;
using DotnetApi.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace DotnetApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            ConfigureDatabase(services);

            services.AddControllers()
                    .AddNewtonsoftJson(options => options.UseMemberCasing()); ;
            services.AddSingleton<BookService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // app.UseHttpsRedirection();

            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void ConfigureDatabase(IServiceCollection services)
        {
            string connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");
            string databaseName = Environment.GetEnvironmentVariable("BOOK_DATABASE");
            string booksCollectionName = Environment.GetEnvironmentVariable("BOOKS_COLLECTION");

            BookstoreDatabaseSettings bookstoreDatabaseSettings = new BookstoreDatabaseSettings()
            {
                BooksCollectionName = booksCollectionName,
                ConnectionString = connectionString,
                DatabaseName = databaseName
            };

            services.AddSingleton<IBookstoreDatabaseSettings>(bookstoreDatabaseSettings);
        }
    }
}