using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(reactWebpack.ReactConfig), "Configure")]

namespace reactWebpack
{
    public static class ReactConfig
    {
        public static void Configure()
        {
            JsEngineSwitcher.Current.DefaultEngineName = V8JsEngine.EngineName;
            JsEngineSwitcher.Current.EngineFactories.AddV8();
            //JsEngineSwitcher.Current.EngineFactories.AddChakraCore();

            ReactSiteConfiguration.Configuration
                .SetReuseJavaScriptEngines(true)
                .SetAllowJavaScriptPrecompilation(true)
                //.AddScriptWithoutTransform("~/Content/lib/semantic-ui-react.min.js")
                .SetJsonSerializerSettings(new JsonSerializerSettings
                {
                    StringEscapeHandling = StringEscapeHandling.EscapeHtml,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                })
                .SetLoadBabel(false)
                .SetUseDebugReact(true)
                .AddScriptWithoutTransform("~/build/server.bundle.js");
        }
    }
}