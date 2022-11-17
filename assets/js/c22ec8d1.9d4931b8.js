"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[606],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),m=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=m(e.components);return i.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,g=c["".concat(d,".").concat(u)]||c[u]||p[u]||o;return t?i.createElement(g,r(r({ref:n},l),{},{components:t})):i.createElement(g,r({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var m=2;m<o;m++)r[m]=t[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var i=t(7462),a=(t(7294),t(3905));const o={description:"This article goes in depth on creating commands in your Discord bot.",keywords:["disnake","bot","guide","tutorial","creating","commands","python"]},r="Creating commands",s={unversionedId:"getting-started/creating-commands",id:"getting-started/creating-commands",title:"Creating commands",description:"This article goes in depth on creating commands in your Discord bot.",source:"@site/docs/getting-started/creating-commands.mdx",sourceDirName:"getting-started",slug:"/getting-started/creating-commands",permalink:"/getting-started/creating-commands",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/getting-started/creating-commands.mdx",tags:[],version:"current",lastUpdatedBy:"Abhigyan Trips",lastUpdatedAt:1668652499,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{description:"This article goes in depth on creating commands in your Discord bot.",keywords:["disnake","bot","guide","tutorial","creating","commands","python"]},sidebar:"guideSidebar",previous:{title:"Initial files",permalink:"/getting-started/initial-files"},next:{title:"Creating cogs/extensions",permalink:"/getting-started/using-cogs"}},d={},m=[{value:"A note on prefix commands",id:"a-note-on-prefix-commands",level:2},{value:"Registering commands",id:"registering-commands",level:2},{value:"Registering commands in specific guilds",id:"registering-commands-in-specific-guilds",level:3},{value:"Responding to commands",id:"responding-to-commands",level:2},{value:"Server info command",id:"server-info-command",level:3},{value:"User info command",id:"user-info-command",level:3},{value:"Resulting Code",id:"resulting-code",level:2}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},p=l("DocsLink"),c=l("DiscordMessages"),u=l("DiscordMessage"),g=l("DiscordInteraction"),h=l("ResultingCode"),k={toc:m};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-commands"},"Creating commands"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page is a follow-up, and the base code used is from the previous page (",(0,a.kt)("a",{parentName:"p",href:"/getting-started/initial-files"},"Initial files"),"). The\ncode can be found on the GitHub repository\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DisnakeDev/guide/tree/main/code-samples/getting-started/initial-files"},"here"),".")),(0,a.kt)("p",null,"Discord also allows developers to register\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/application-commands"},"slash commands"),", which provides users a\nfirst-class way of interacting directly with your application. These slash commands shall be covered by the guide\n",(0,a.kt)("a",{parentName:"p",href:"/interactions/slash-commands"},"here"),", in the ",(0,a.kt)("strong",{parentName:"p"},"Interactions")," section."),(0,a.kt)("h2",{id:"a-note-on-prefix-commands"},"A note on prefix commands"),(0,a.kt)("p",null,"Bot commands that are initiated when a keyword is used along with a specified prefix (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"$"),") are known as\n",(0,a.kt)("strong",{parentName:"p"},"prefix commands")," (are also often referred to as ",(0,a.kt)("strong",{parentName:"p"},"text commands"),")."),(0,a.kt)("admonition",{title:"Message Intent - Privileged",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It is to be noted that handling prefix commands require the ",(0,a.kt)("strong",{parentName:"p"},"message intent"),", which allows the bot to get content and\ndata of messages sent by users. This intent has recently been privileged, i.e., it needs to be manually enabled for the\nbot application, and its requirement will eventually be reviewed if your bot is in over 100 servers."),(0,a.kt)("p",{parentName:"admonition"},"You can read more about the message intent ",(0,a.kt)("a",{parentName:"p",href:"https://support-dev.discord.com/hc/en-us/articles/4404772028055"},"here"),".")),(0,a.kt)("p",null,"Therefore, to minimize the permissions your bot has to use, we will be covering prefix commands under the ",(0,a.kt)("strong",{parentName:"p"},"Popular\nTopics")," section, and advancing with the basics of slash commands in this article; more advanced topics of the same will\nbe covered in the ",(0,a.kt)("a",{parentName:"p",href:"/interactions"},(0,a.kt)("strong",{parentName:"a"},"Interactions"))," section."),(0,a.kt)("h2",{id:"registering-commands"},"Registering commands"),(0,a.kt)("p",null,"This section covers the bare minimum to get you started with registering slash commands. Once again, you can refer to\n",(0,a.kt)("a",{parentName:"p",href:"/interactions/slash-commands"},"this page")," for an in-depth coverage of topics, including guild commands,\nglobal commands, options, option types, autocomplete and choices."),(0,a.kt)("p",null,"Now, we shall continue with the base code used in the previous section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,a.kt)("p",null,"The first step is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@bot.slash_command")," coroutine, along with an ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," function in order to define the code\nfor your slash command. Below is a script demonstrating the same (focus on the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"inter"),", which is short for\n",(0,a.kt)("inlineCode",{parentName:"p"},"interaction"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {12-14}',title:'"main.py"',"{12-14}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command()\nasync def ping(inter):\n    ...\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"inter")," passed into the function is analogous to context, or ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," used in prefix commands - it passes through all\ninformation relative to the interaction - data regarding the user who initiated the command, as an example. It is also\nnecessary for replying to the use of the command."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Using ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"ctx")," vs. ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"inter")),(0,a.kt)("p",{parentName:"admonition"},"If you have experience with coding bots with ",(0,a.kt)("a",{parentName:"p",href:"https://discordpy.readthedocs.io/en/latest"},(0,a.kt)("inlineCode",{parentName:"a"},"discord.py")),", you would be\nfamiliar with using ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," as an abbreviation for passing context into the function. This guide will primarily be using\n",(0,a.kt)("inlineCode",{parentName:"p"},"inter"),", as it is short for ",(0,a.kt)("inlineCode",{parentName:"p"},"interaction")," and refers to ",(0,a.kt)(p,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"}),".\nOf course, you're open to using your preferred abbreviation in code.")),(0,a.kt)("h3",{id:"registering-commands-in-specific-guilds"},"Registering commands in specific guilds"),(0,a.kt)("p",null,'Note that servers are referred to as "guilds" in the Discord API and disnake library. On running the above code, the\nslash command will be registered globally, and will be accessible on all servers the bot is in.'),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"guild_ids")," argument for the command to only be registered in a list of specified servers, for example your development server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {12-14}',title:'"main.py"',"{12-14}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command(guild_ids=[1234, 5678])  # Your server IDs go here.\nasync def ping(inter):\n    ...\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Using ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"test_guilds")," in ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"commands.Bot()")),(0,a.kt)("p",{parentName:"admonition"},"When you have multiple commands registered under the same test guilds, it is convenient to only have your ",(0,a.kt)("inlineCode",{parentName:"p"},"guild_ids"),"\ndefined once. Therefore, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"test_guilds")," argument in the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands.Bot()")," instance instead of passing\n",(0,a.kt)("inlineCode",{parentName:"p"},"guild_ids")," to every single command -"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bot = commands.Bot(test_guilds=[1234, 5678])\n"))),(0,a.kt)("p",null,"Now that you're all set with registering the slash command, you can proceed with responding to the initiated command."),(0,a.kt)("h2",{id:"responding-to-commands"},"Responding to commands"),(0,a.kt)("p",null,"You can respond to a slash command initiated by the user, using ",(0,a.kt)("inlineCode",{parentName:"p"},"inter.response.send_message()"),". It is analogous to\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.send()"),", in that you can respond to the interaction with embeds, files, buttons/select menus or just plain\ntext."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {14}',title:'"main.py"',"{14}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command(guild_ids=[1234, 5678])\nasync def ping(inter):\n    await inter.response.send_message("Pong!")\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"DiscordMessages"},(0,a.kt)(u,{profile:"bot",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(g,{profile:"user",command:"true",mdxType:"DiscordInteraction"},"ping")),"Pong!")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"server-info-command"},"Server info command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"inter.guild")," refers to the guild the interaction was sent in (a ",(0,a.kt)(p,{reference:"disnake.Guild",mdxType:"DocsLink"},"Guild"),"\ninstance), which exposes properties such as ",(0,a.kt)("inlineCode",{parentName:"p"},".name")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".member_count"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {12-16}',title:'"main.py"',"{12-16}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command()\nasync def server(inter):\n    await inter.response.send_message(\n        f"Server name: {inter.guild.name}\\nTotal members: {inter.guild.member_count}"\n    )\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"DiscordMessages"},(0,a.kt)(u,{profile:"bot",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(g,{profile:"user",command:"true",mdxType:"DiscordInteraction"},"server")),"Server name: Disnake Guide ",(0,a.kt)("br",null),"Total members: 2")),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Refer to the ",(0,a.kt)(p,{reference:"disnake.Guild",mdxType:"DocsLink"},"Guild")," documentation for a list of all the available\nproperties and methods.")),(0,a.kt)("p",null,"You could also display the date the server was created, or the server's verification level. You would do those in the\nsame manner - use ",(0,a.kt)("inlineCode",{parentName:"p"},"inter.guild.created_at")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"inter.guild.verification_level"),", respectively."),(0,a.kt)("h3",{id:"user-info-command"},"User info command"),(0,a.kt)("p",null,'A "user" refers to a Discord user. ',(0,a.kt)("inlineCode",{parentName:"p"},"inter.author")," refers to the user the interaction was sent by\n(a ",(0,a.kt)(p,{reference:"disnake.User",mdxType:"DocsLink"},"User")," instance in DM contexts, or a ",(0,a.kt)(p,{reference:"disnake.Member",mdxType:"DocsLink"},"Member")," instance in server contexts), which exposes properties\nsuch as ",(0,a.kt)("inlineCode",{parentName:"p"},".name")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".id"),". (Using just ",(0,a.kt)("inlineCode",{parentName:"p"},"inter.author")," will give the user's full tag.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {12-14}',title:'"main.py"',"{12-14}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command()\nasync def user(inter):\n    await inter.response.send_message(f"Your tag: {inter.author}\\nYour ID: {inter.author.id}")\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"DiscordMessages"},(0,a.kt)(u,{profile:"bot",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(g,{profile:"user",command:"true",mdxType:"DiscordInteraction"},"server")),"Your tag: AbhigyanTrips#1234 ",(0,a.kt)("br",null),"Your ID: 123456789012345678")),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Refer to the ",(0,a.kt)(p,{reference:"disnake.User",mdxType:"DocsLink"})," and ",(0,a.kt)(p,{reference:"disnake.Member",mdxType:"DocsLink"})," documentation for a list\nof all the available properties and methods.")),(0,a.kt)("p",null,"And there you have it!"),(0,a.kt)("h2",{id:"resulting-code"},"Resulting Code"),(0,a.kt)(h,{mdxType:"ResultingCode"}))}f.isMDXComponent=!0}}]);