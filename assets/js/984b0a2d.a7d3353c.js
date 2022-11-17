"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[37],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=m(t),g=o,u=p["".concat(d,".").concat(g)]||p[g]||l[g]||i;return t?a.createElement(u,s(s({ref:n},c),{},{components:t})):a.createElement(u,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var m=2;m<i;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var a=t(7462),o=(t(7294),t(3905));const i={description:"An in-depth section on creating cogs for your Discord bot.",keywords:["disnake","bot","guide","tutorial","cogs","extensions","python"]},s="Creating cogs/extensions",r={unversionedId:"getting-started/using-cogs",id:"getting-started/using-cogs",title:"Creating cogs/extensions",description:"An in-depth section on creating cogs for your Discord bot.",source:"@site/docs/getting-started/using-cogs.mdx",sourceDirName:"getting-started",slug:"/getting-started/using-cogs",permalink:"/getting-started/using-cogs",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/getting-started/using-cogs.mdx",tags:[],version:"current",lastUpdatedBy:"Abhigyan Trips",lastUpdatedAt:1668652499,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{description:"An in-depth section on creating cogs for your Discord bot.",keywords:["disnake","bot","guide","tutorial","cogs","extensions","python"]},sidebar:"guideSidebar",previous:{title:"Creating commands",permalink:"/getting-started/creating-commands"},next:{title:"Interactions",permalink:"/interactions"}},d={},m=[{value:"Creating files",id:"creating-files",level:2},{value:"Initial code",id:"initial-code",level:2},{value:"Inheriting a class",id:"inheriting-a-class",level:3},{value:"Registering commands",id:"registering-commands",level:3},{value:"Adding <code>setup</code> function",id:"adding-setup-function",level:3},{value:"Syntax changes",id:"syntax-changes",level:2}],c=(l="DocsLink",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const p={toc:m};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-cogsextensions"},"Creating cogs/extensions"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.disnake.dev/en/stable/ext/commands/cogs.html"},(0,o.kt)("strong",{parentName:"a"},"Cogs"))," are analogous to modules that extend the core of\nthe bot - thus adding to its functions and abilities. They also allow you to break down and organize your bot's\ncollection of commands/listeners (which is useful when your bot's command list becomes quite extensive)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Cogs are typically used alongside with ",(0,o.kt)("strong",{parentName:"p"},"Extensions"),". You can read more about them\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.disnake.dev/en/stable/ext/commands/extensions.html"},"in the documentation"),".")),(0,o.kt)("h2",{id:"creating-files"},"Creating files"),(0,o.kt)("p",null,"What we code here will extend on the code from ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/initial-files"},(0,o.kt)("strong",{parentName:"a"},"Initial Files")),", and thus we assume that there\nalready exists a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," file in your directory which initiates a ",(0,o.kt)("inlineCode",{parentName:"p"},"commands.Bot()")," instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("p",null,"Next, we will create a new Python file either in the same directory as ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," or in a subfolder (which is\nrecommended). For the sake of being organized, we will create the cog file in a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"cogs")," folder, and name the\nfile ",(0,o.kt)("inlineCode",{parentName:"p"},"ping.py"),' just for the "ping" command. If you\'re strictly following the guide, your file directory should look\nsomething like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 cogs/\n\u2502   \u2514\u2500\u2500 ping.py\n\u251c\u2500\u2500 main.py\n\u2514\u2500\u2500 secrets.env\n")),(0,o.kt)("h2",{id:"initial-code"},"Initial code"),(0,o.kt)("h3",{id:"inheriting-a-class"},"Inheriting a class"),(0,o.kt)("p",null,"The first step is to create a class in ",(0,o.kt)("inlineCode",{parentName:"p"},"ping.py")," that inherits from the ",(0,o.kt)("inlineCode",{parentName:"p"},"commands.Cog"),", along with a constructor that\ntakes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"bot")," object as its only argument and saves it. This is where we will be putting in our commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="ping.py"',title:'"ping.py"'},'from disnake.ext import commands\n\n\nclass PingCommand(commands.Cog):\n    """This will be for a ping command."""\n\n    def __init__(self, bot: commands.Bot):\n        self.bot = bot\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We typehint ",(0,o.kt)("inlineCode",{parentName:"p"},"bot: commands.Bot")," here to give the IDE an idea of what the argument type is. It is not necessary, but can\nbe useful in development when adding certain arguments to your commands.")),(0,o.kt)("h3",{id:"registering-commands"},"Registering commands"),(0,o.kt)("p",null,"Now, to define a slash command inside the class, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"commands.slash_command()")," decorator. It functions the same as\n",(0,o.kt)("inlineCode",{parentName:"p"},"bot.slash_command()"),", but works in cogs as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="ping.py" {10-13}',title:'"ping.py"',"{10-13}":!0},'import disnake\nfrom disnake.ext import commands\n\n\nclass PingCommand(commands.Cog):\n    """This will be for a ping command."""\n\n    def __init__(self, bot: commands.Bot):\n        self.bot = bot\n\n    @commands.slash_command()\n    async def ping(self, inter: disnake.ApplicationCommandInteraction):\n        """Get the bot\'s current websocket latency."""\n        await inter.response.send_message(f"Pong! {round(self.bot.latency * 1000)}ms")\n')),(0,o.kt)("p",null,"Note that we're using ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," as the first argument, since the command function is inside a class."),(0,o.kt)("h3",{id:"adding-setup-function"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h3"},"setup")," function"),(0,o.kt)("p",null,"The last thing that needs to be added to this file is a ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," function, so that disnake can load the cog when it is\nadded to ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="ping.py" {16,17}',title:'"ping.py"',"{16,17}":!0},'import disnake\nfrom disnake.ext import commands\n\n\nclass PingCommand(commands.Cog):\n    """This will be for a ping command."""\n\n    def __init__(self, bot: commands.Bot):\n        self.bot = bot\n\n    @commands.slash_command()\n    async def ping(self, inter: disnake.ApplicationCommandInteraction):\n        """Get the bot\'s current websocket latency."""\n        await inter.response.send_message(f"Pong! {round(self.bot.latency * 1000)}ms")\n\n\ndef setup(bot: commands.Bot):\n    bot.add_cog(PingCommand(bot))\n')),(0,o.kt)("p",null,"This cog file can now be added to the bot via the ",(0,o.kt)("inlineCode",{parentName:"p"},"bot.load_extension()")," method in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\nbot.load_extension("cogs.ping")  # Note: We did not append the .py extension.\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("p",null,"Note that we've input ",(0,o.kt)("inlineCode",{parentName:"p"},'"cogs.ping"')," here, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"ping.py")," file is inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"cogs")," folder. Therefore, the basic\nsyntax for loading an extension is ",(0,o.kt)("inlineCode",{parentName:"p"},'bot.load_extension("<folder_name>.<file_name>")'),"."),(0,o.kt)("p",null,"And that concludes the use of cogs with ",(0,o.kt)("inlineCode",{parentName:"p"},"disnake"),"! You can now create multiple cogs to group and organize your\ncommands/events, and load/unload them via your main file. More information on special cog methods and meta options can\nbe found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.disnake.dev/en/stable/ext/commands/cogs.html"},"in the documentation"),"."),(0,o.kt)("h2",{id:"syntax-changes"},"Syntax changes"),(0,o.kt)("p",null,"Cogs represent a fairly drastic change in the way you write commands and bots, so here's a list you can come back to for\nthe primary syntax used in cogs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each cog is a Python class that subclasses ",(0,o.kt)(c,{ext:"commands",reference:"disnake.ext.commands.Cog",mdxType:"DocsLink"},"commands.Cog"),"."),(0,o.kt)("li",{parentName:"ul"},"Decorators for commands in cogs:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Command - ",(0,o.kt)(c,{ext:"commands",reference:"disnake.ext.commands.command",mdxType:"DocsLink"},"commands.command()")),(0,o.kt)("li",{parentName:"ul"},"Slash command - ",(0,o.kt)(c,{ext:"commands",reference:"disnake.ext.commands.slash_command",mdxType:"DocsLink"},"commands.slash_command()")),(0,o.kt)("li",{parentName:"ul"},"User command - ",(0,o.kt)(c,{ext:"commands",reference:"disnake.ext.commands.user_command",mdxType:"DocsLink"},"commands.user_command()")),(0,o.kt)("li",{parentName:"ul"},"Message command - ",(0,o.kt)(c,{ext:"commands",reference:"disnake.ext.commands.message_command",mdxType:"DocsLink"},"commands.message_command()")))),(0,o.kt)("li",{parentName:"ul"},"Every listener is marked with the ",(0,o.kt)(c,{ext:"commands",reference:"disnake.ext.commands.Cog.listener",mdxType:"DocsLink"},"commands.Cog.listener()")," decorator."),(0,o.kt)("li",{parentName:"ul"},"Cogs are then registered with the ",(0,o.kt)(c,{ext:"commands",reference:"disnake.ext.commands.Bot.add_cog",mdxType:"DocsLink"},"Bot.add_cog")," call, and are subsequently removed with the ",(0,o.kt)(c,{ext:"commands",reference:"disnake.ext.commands.Bot.remove_cog",mdxType:"DocsLink"},"Bot.remove_cog")," call.")),(0,o.kt)("sup",null,"Source: ",(0,o.kt)("a",{href:"https://docs.disnake.dev/en/stable/ext/commands/cogs.html"},"Disnake Documentation")),(0,o.kt)("p",null,"Cogs represent a fairly drastic change in the way you write commands and bots. Thus, it is recommended that you get\nfamiliar with this syntax - since the code we use in this section is largely tailored for cogs."))}g.isMDXComponent=!0}}]);