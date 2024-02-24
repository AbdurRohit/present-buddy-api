import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import "/node_modules/reveal.js/dist/reveal.css";
import "/node_modules/reveal.js/dist/theme/simple.css";


export default function Slides() {
  
  let deck = new Reveal({
    plugins: [Markdown],
  });
  deck.initialize();  

  return (
    <>
      <section data-markdown>
        <textarea data-template>
          ## Slide 1 A paragraph with some text and a [link](https://hakim.se).
          ---
          ## Slide 2 
          ---
          ## Slide 3
        </textarea>
      </section>
    </>
  );
}
