# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 
Ficamos felizes com a sua ajuda =D
Como projeto o violin.css é relativamente novo, então sua ajuda será muito apreciada aqui. Vamos sincronizar algumas ideias para mantermos um ambiente feliz e produtivo, o que acha?

Tive uma ideia para um novo componente para o violin.css, uma alteração de componente ou algum outro tipo de situação que envolva uma melhoria ou inovação. O que fazer?
R: Nesse caso, abra uma issue com a label enhancement ou discussion, assim teremos uma troca de idéias saúdavel sobre sua ideia, sobre como ela se encaixará no violin.css e como será implementada!

O mesmo vale se você achar um bug ou alguma outra situação que precise ser reportado. Ficaremos felizes com suas contribuições!

O violin.css  feito com base no design system dos produtos da Involves, por isso seguimos ele no desenvolvimento dos nossos componentes. Assim que publicado, o design system ficar disponível para todos que desejam contribuir com o desenvolvimento de novos componentes!


## Processo de pull request

- Siga as instruções do README.md para preparar seu ambiente, e iniciar o desenvolvimento =)
- Crie sua branch com o seguinte formato: bug/enhancement/numerodaissue-descricao
- Antes de iniciar o desenvolvimento, recomendamos que rode os testes de regressão visual (npm run test:visual) e verifique se tudo está OK
- Se você está implementando um novo componente, adicione os testes no arquivo backstop.json
- Se você está implementando um novo componente ou alterando um componente existente, antes de fazer o PR rode npm run test:visual e npm run test:visual:approve, assim suas alterações serão consideradas nos testes de regressão visual
- No seu PR, use o template de PULL REQUEST disponível no nosso repositórios. Não esqueça de adicionar o máximo de detalhes do que foi feito =)
- Seu PR será revisado por outro colaborador do projeto, assim teremos uma troca de ideias bacana sobre a nova feature ou correção
- Por último, se passado nos testes de integração, seu PR sera aprovado e "mergeado" no violin.css :D

No momento estamos trabalhando na master até gerarmos a primeira versão estável, para então utilizarmos o versionamento semântico à risca. 
