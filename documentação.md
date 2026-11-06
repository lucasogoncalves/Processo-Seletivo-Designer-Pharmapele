# Documentação do processo

## Visão geral

Neste projeto, desenvolvi uma proposta de campanha para o lançamento de quatro Deo Hair and Body Splashes da Pharmapele: BREEZE, LOVELY, CHIC e GLOW.

Meu objetivo foi apresentar a linha como um sistema visual único sem apagar a personalidade de cada fragrância. Trabalhei cada produto como um universo próprio, conectado aos demais pela sofisticação da marca, pela valorização das embalagens e por uma abordagem voltada a beleza, perfumação, frescor, autocuidado e estilo de vida.

O projeto reúne pesquisa, direção de arte, geração e tratamento de imagens, design para redes sociais, material de varejo e uma página digital de apresentação do processo.

## Leitura do briefing

O briefing solicitava uma campanha coerente e comercial, com presença de produto, apelo sensorial e capacidade de desdobramento. A linha deveria comunicar o uso dos body splashes no corpo e no cabelo, associando perfumação a rotina, experiência e cuidado pessoal.

Para cada fragrância, o escopo previa KV lifestyle, KV conceitual, post para feed, story, peça social extra e lâmina de varejo A4 frente e verso.

A landing page comercial estava fora do escopo desta primeira etapa. Mesmo assim, criei uma página adicional para apresentar a narrativa do projeto, as referências utilizadas e a linha de raciocínio que conduziu às soluções. Essa página funciona como memorial visual e não substitui a landing page do briefing, que será desenvolvida posteriormente como uma entrega própria.

## Pesquisa e direção criativa

Parti das referências olfativas indicadas no briefing e observei como esses perfumes consolidados construíram seus territórios visuais. Em vez de reproduzir suas campanhas, utilizei códigos de atmosfera, luz, cor, cenário e comportamento como ponto de partida para novas interpretações para a Pharmapele.

Minha intenção foi ativar a memória afetiva associada a cada família olfativa por meio de uma metalinguagem visual: as imagens fazem referência a universos reconhecíveis, mas são reorganizadas para apresentar os produtos da Pharmapele com personalidade própria.

- **BREEZE — Acqua di Gioia:** frescor mediterrâneo, água, pedra, vento, linho, cítricos e liberdade.
- **LOVELY — Chance Eau Tendre:** feminilidade espontânea, amizade, movimento, atmosfera noturna, flash, coral e lilás.
- **CHIC — English Pear & Freesia:** pomar, pera madura, madeira, musgo, luz dourada, intimidade e elegância acolhedora.
- **GLOW — Marc Jacobs Daisy:** céu azul, margaridas, campo aberto, energia solar, espontaneidade e acabamento editorial.

As referências selecionadas estão organizadas nas pastas `referencia` de cada produto. O arquivo `perfil.md` concentra uma análise mais detalhada dos territórios e atributos de cada fragrância.

## Desenvolvimento visual

As primeiras explorações apresentavam uma estética genérica de perfumaria. Ao longo do processo, refinei a direção para construir imagens mais narrativas, táteis e humanas, com atenção às relações entre pessoas, materiais, ambientes e gestos cotidianos.

Em BREEZE, priorizei movimento, respiração e contato com a paisagem. Em LOVELY, trabalhei sociabilidade, diversão e energia noturna. Em CHIC, explorei cuidado, maturidade e luxo silencioso. Em GLOW, usei luz natural, cor franca e espontaneidade. Essa diferenciação permitiu reconhecer cada produto sem perder a unidade geral da linha.

## Fluxo híbrido de criação

Utilizei um fluxo híbrido que combina pesquisa visual, direção de arte, recursos de inteligência artificial, tratamento de imagem e diagramação manual.

A inteligência artificial foi empregada como ferramenta de exploração fotográfica, composição, atmosfera e construção de cenas. Os resultados foram selecionados criticamente e orientados pelas referências, moodboards e mockups oficiais. Quando necessário, descartei imagens com problemas de anatomia, física, embalagem ou coerência visual e gerei novas soluções com poses mais simples, relações espaciais plausíveis e melhor presença de produto.

Tipografia, hierarquia, textos, elementos gráficos e organização das peças foram tratados como decisões de design. Esse processo acelerou a experimentação sem substituir a curadoria e a consistência entre os formatos.

Como os arquivos editáveis oficiais das embalagens não foram disponibilizados em todos os formatos necessários, produzi aproximações de alto contraste para os nomes dos produtos e utilizei vetorização como apoio. Esses elementos estão reunidos em `Recursos Globais/Assets de apoio.ai` e podem ser substituídos pelos arquivos oficiais em uma etapa de produção definitiva.

## Sistema das lâminas de varejo

Para as lâminas A4, desenvolvi uma estrutura modular adaptável às quatro fragrâncias. Cenários, modelos e packshots foram tratados como componentes independentes, enquanto composição, textos e elementos gráficos permaneceram organizados em HTML e CSS durante a construção.

Cada produto possui uma página-base em `Assets/index-lamina-varejo.html`. Depois da diagramação, converti as estruturas para SVG editável e finalizei os arquivos no Illustrator. Também utilizei brevemente a skill autoral `html-to-svg`, criada para transformar composições HTML/CSS em bases SVG compatíveis com o Illustrator.

Os arquivos finais incluem arte editável em Illustrator, PDF preparado para impressão, exportações JPG para apresentação e mockup de aplicação. Antes de uma tiragem industrial, recomendo a conferência final de perfil de cor, sangria, margens de segurança, resolução efetiva dos vínculos e especificações da gráfica responsável.

## Entregáveis finais

Concluí sete peças para cada uma das quatro fragrâncias, totalizando 28 entregáveis principais:

| Entregável | BREEZE | LOVELY | CHIC | GLOW |
|---|:---:|:---:|:---:|:---:|
| KV lifestyle | ✓ | ✓ | ✓ | ✓ |
| KV conceitual | ✓ | ✓ | ✓ | ✓ |
| Feed | ✓ | ✓ | ✓ | ✓ |
| Story | ✓ | ✓ | ✓ | ✓ |
| Social extra | ✓ | ✓ | ✓ | ✓ |
| A4 frente | ✓ | ✓ | ✓ | ✓ |
| A4 verso | ✓ | ✓ | ✓ | ✓ |

Além das peças solicitadas, produzi quatro mockups das lâminas e a página de apresentação do processo. As exportações para avaliação estão nas pastas `Finalizados` de cada produto, junto aos arquivos editáveis e PDFs disponíveis.

## Página de apresentação do processo

Criei uma página estática em HTML, CSS e JavaScript para apresentar o trabalho como uma sequência de quatro cases. O arquivo de entrada é `index.html`.

A interface permite selecionar cada fragrância, visualizar conceito e atmosfera, consultar referências, compreender o que foi extraído da pesquisa, comparar os desdobramentos, ver frente, verso e mockup das lâminas, ampliar as peças e navegar entre os cases em diferentes tamanhos de tela.

Seu objetivo é mostrar como cheguei às soluções e como transformei referências olfativas em sistemas visuais consistentes. A futura landing page comercial terá outro papel: comunicar a linha diretamente ao consumidor e responder ao briefing específico dessa entrega.

A apresentação também está publicada em <https://lucasogoncalves.github.io/Processo-Seletivo-Designer-Pharmapele/>.

## Estrutura dos arquivos

- `Recursos Globais`: materiais fornecidos, manual de marca, embalagens, mockups, referências e assets compartilhados;
- `BREEZE`, `LOVELY`, `CHIC` e `GLOW`: pastas das quatro campanhas;
- `Assets`: imagens de trabalho, componentes visuais e bases das lâminas;
- `referencia`: moodboards e imagens utilizadas na pesquisa;
- `Finalizados`: exportações selecionadas, editáveis, PDFs e mockups;
- `index.html`, `styles.css` e `script.js`: página de apresentação;
- `briefing-designer-2026.md`: briefing reorganizado;
- `perfil.md`: aprofundamento estratégico e visual;
- `entregaveis-por-produto.csv`: controle dos entregáveis.

## Considerações finais

O resultado combina direção criativa, senso estético, clareza comercial e experimentação técnica. Mais do que produzir peças isoladas, procurei demonstrar como uma ideia central pode ser adaptada a diferentes fragrâncias, formatos e pontos de contato sem perder coerência.

O fluxo híbrido ampliou as possibilidades de exploração, mas a consistência do conjunto veio principalmente da pesquisa, da curadoria, da construção das hierarquias e das decisões de direção de arte. Os arquivos permanecem organizados para permitir ajustes, substituição por assets oficiais e evolução para a futura landing page comercial.
