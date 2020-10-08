var levels = [
  {
    helpTitle : "Selecteer elementen op basis van hun HTML element",
    selectorName : "element Selector",
    doThis : "Selecteer de elementen van type plate",
    selector : "plate",
    syntax : "A",
    help : "Selecteer alle '<strong>A</strong>' elementen. Je kan dus het <tag>div</tag> element selecteren met de selector <tag>div</tag> en alle <tag>p</tag> elementen met de selector <tag>p</tag>",
    examples : [
      '<strong>div</strong> selecteert alle <tag>div</tag> elementen.',
      '<strong>p</strong> selecteert alle <tag>p</tag> elementen.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    helpTitle : "Selecteer elementen op basis van hun HTML element",
    selectorName : "element Selector",
    doThis : "Selecteer de elementen van type bento",
    selector : "bento",
    syntax : "A",
    help : "Selecteer alle '<strong>A</strong>' elementen. Je kan dus het <tag>div</tag> element selecteren met de selector <tag>div</tag> en alle <tag>p</tag> elementen met de selector <tag>p</tag>",
    examples : [
      '<strong>div</strong> selecteert alle <tag>div</tag> elementen.',
      '<strong>p</strong> selecteert alle <tag>p</tag> elementen.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Selecteer het plate element met de ID 'fancy'",
    selector : "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Selecteert elementen met een ID",
    syntax: "#id",
    help : 'Selecteert de elementen met een specifieke <strong>id</strong>. Je kan de ID selector ook combineren met de element selector.',
    examples : [
      '<strong>#cool</strong> selecteert elk element met <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selecteert <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Selecteert een element dat zich <i>in</i> een ander element bevindt.",
    selectorName : "nakomeling Selector",
    doThis : "Selecteer de apple op een plate",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Selecteert alle <strong>B</strong> in een <strong>A</strong>. <strong>B</strong> wordt een nakomeling genoemd, omdat het zich in een ander element bevindt.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selecteert alle <tag>strong</tag> elementen die zich bevinden in een <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selecteert alle <tag>span</tag> elementen die zich bevinden in het element met <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Selecteer de pickle op de fancy plate",
    selector : "#fancy pickle",
    helpTitle: "Combineer de nakomeling en ID selector",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Je kan eender welke selector combineren met de nakomeling selector.',
    examples : [
      '<strong>#cool&nbsp;span</strong> Selecteert alle <tag>span</tag> elementen die zich bevinden in het element met <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Selecteer de kleine (small) apples",
    selector : ".small",
    selectorName: "Class Selector",
    helpTitle: "Selecteer elementen op basis van hun class",
    syntax: ".classname",
    help : 'De class selector selecteert alle elementen met een bepaalde class. Elementen kunnen maar één ID hebben, maar wel meerdere classes.',
    examples : [
    '<strong>.neato</strong> selecteert alle elementen met <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Selecteer de kleine (small) oranges",
    selector : "orange.small",
    helpTitle: "Combineer de class selector",
    syntax: "A.className",
    help : 'Je kan de class selector combineren met andere selectors, zoals de element selector.',
    examples : [
      '<strong>ul.important</strong> selecteert alle <tag>ul</tag> elementen met <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selecteert alle elementen met <strong>id="big"</strong> die ook <strong>class="wide"</strong> hebben'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Selecteer de kleine (small) oranges die zich op een bento bevinden",
    selector : "bento orange.small",
    syntax: "Volhouden!",
    helpTitle: "Jij kan dit...",
    help : 'Combineer wat je hebt geleerd in de vorige levels om deze oefening op te lossen!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Selecteer alle plates èn alle bentos",
    selector : "plate,bento",
    selectorName : "Comma Combinator",
    helpTitle: "Combineer, selectors, met... commas!",
    syntax : "A, B",
    help : 'Dit selecteert alle <strong>A</strong> EN <strong>B</strong> elementen. Je kan eender welke selectors op deze manier combineren, en je kan er meer dan twee gebruiken.',
    examples: [
    '<strong>p, .fun</strong> selecteert alle <tag>p</tag> elementen EN alle elementen met <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> selecteert alle <tag>a</tag> EN <tag>p</tag> EN <tag>div</tag> elementen'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Selecteer ALLES!",
    selector : "*",
    selectorName:  "De ALLES Selector",
    helpTitle: "Je kan alles selecteren!",
    syntax : "*",
    help : 'Je kan alle elementen selecteren met de alles selector! ',
    examples : [
      '<strong>p *</strong> selecteert alle elementen in een <tag>p</tag> element.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Selecteer alles op een plate",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combineer de alles selector",
    help : 'Dit selecteert alle elementen in een <strong>A</strong> element.',
    examples : [
      '<strong>p *</strong> selecteert alle elementen in een <tag>p</tag> element.',
      '<strong>ul.fancy *</strong> selecteert alle elementen in een <tag>ul class="fancy"</tag> element.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Selecteer elke apple die zich VLAK NAAST een plate bevindt",
    selector : "plate + apple",
    helpTitle: "Selecteer een element dat zich direct naast een ander element bevindt",
    selectorName: "Aangrenzende buur Selector",
    syntax : "A + B",
    help : "Dit selecteert alle <strong>B</strong> elementen die vlak naast een <strong>A</strong> element staan. ",
    examples : [
      '<strong>p + .intro</strong> selecteert alle elementen met <strong>class="intro"</strong> die vlak naast een <tag>p</tag> element staan',
      '<strong>div + a</strong> selecteert alle <tag>a</tag> elementen die vlak naast een <tag>div</tag> element staan'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Algemene Buur selector",
    helpTitle: "Selecteer elementen die naast (maar niet per sé direct naast) een ander element staan",
    syntax: "A ~ B",
    doThis : "Selecteer de pickles die zich naast de bento bevinden",
    selector : "bento ~ pickle",
    help : "Je kan alle buren selecteer naast een element. Dit werkt zoals de Aangrenzende Buur selector, alleen worden alle volgende buren ook geselecteerd.",
    examples : [
      '<strong>A ~ B</strong> selecteert alle <strong>B</strong> elementen die zich naast een <strong>A</strong> element bevinden.'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Kind Selector",
    syntax: "A > B&nbsp;",
    doThis : "Selecteer de apple die zich rechtstreeks op een plate bevindt",
    selector : "plate > apple",
    helpTitle: "Selecteer elementen die zich rechtstreeks in een ander element bevinden.",
    help : "Je kan elementen selecteren die zich rechtstreeks in een ander element bevinden.",
    examples : [
      '<strong>A > B</strong> selecteert alle <strong>B</strong> elementen die zich rechtstreeks op een <strong>A</strong> bevinden.'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  }
];