import {HLJSApi, Language} from "highlight.js";

/*
 * from https://github.com/AlexxNB/highlightjs-svelte v1.0.6
 */

function hljsDefineSvelte(hljs: HLJSApi) : Language{
    return {
        subLanguage: "xml",
        contains: [
        hljs.COMMENT("<!--", "-->", {
            relevance: 10,
        }),
        {
            begin: /^(\s*)(<script(\s*context="module")?>)/gm,
            end: /^(\s*)(<\/script>)/gm,
            subLanguage: "javascript",
            excludeBegin: true,
            excludeEnd: true,
            contains:[
            { 
                begin: /^(\s*)(\$:)/gm,
                end: /(\s*)/gm,
                className: 'keyword'
            }
            ]
        },
        {
            begin: /^(\s*)(<style.*>)/gm,
            end: /^(\s*)(<\/style>)/gm,
            subLanguage: "css",
            excludeBegin: true,
            excludeEnd: true,
        },
        {
            begin: /\{/gm,
            end: /\}/gm,
            subLanguage: "javascript",
            contains:[
            {
                begin: /[\{]/, 
                end: /[\}]/, 
                skip: true
            },
            {
                begin: /([#:\/@])(if|else|each|await|then|catch|debug|html)/gm,
                className:'keyword',
                relevance: 10,
            }
            ],
        }
        ]
    }
}

export function svelte(hljs: HLJSApi) {
    hljs.registerLanguage('Terraform', hljsDefineSvelte);
};
