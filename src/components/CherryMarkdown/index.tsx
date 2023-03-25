import "cherry-markdown/dist/cherry-markdown.css"
import Cherry from "cherry-markdown";
import { toolbarsOptions } from "./cherryMarkdownConfig";
const cherryMarkdownInit =()=>{
   new Cherry({
        id: 'cherry-markdown',
        value: 'welcome',
        toolbars: toolbarsOptions(),
    });
}
export default cherryMarkdownInit;