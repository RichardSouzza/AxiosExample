# Estudo de Caso e Implementação de Algoritmos com Threads em Sistemas Operacionais

## Relatório Técnico

### Conceito de Threads

Threads são fluxos de controle independentes que operam dentro do mesmo espaço de endereço que outros fluxos de controle independentes dentro de um processo.[¹](#ref1)

Cada thread compartilha os recursos do processo-pai, incluindo o espaço de memória e os arquivos abertos, mas mantém seu próprio contador de programa, que mantém o controle de qual instrução a thread está atualmente executando, e sua própria pilha, que contém as informações necessárias para a execução da thread.[²](#ref2)

### Importância das Threads

As threads são um dos principais componentes para se alcançar a concorrência e o paralelismo em sistemas computacionais. Elas são responsáveis por dividir um programa em múltiplas unidades de execução independentes, permitindo que diferentes partes do código sejam executadas simultaneamente, o que aumenta o desempenho global da aplicação.[³](#ref3)

### Detalhamento da Pesquisa

A pesquisa para a implementação da atividade abrangeu temas relativos à teoria sobre threading, implementação de requisições síncronas e assíncronas, utilizando a biblioteca Axios, e implementação de APIs com suporte a multithreading.

### Análise do Estudo de Caso

A implementação de multithreading solucionaria o problema enfrentado pela empresa, pois possibilitaria a execução de vários processos em paralelo, de modo que um processo não precisaria esperar pela execução de outro para ser executado, otimizando o tempo e a experiência do usuário.

### Comparação de Performance

No exemplo de processos que foram implementados, as requisições em uma implementação síncrona poderiam levar até 13 segundos para ser executadas, enquanto na implementação assíncrona foram executadas em cerca de 3 segundos, demonstrando um ganho de performance de cerca de 80%, com uma execução 4 vezes mais rápida.

## Instruções para Execução

### Pré-requisitos

- Deve possuir o Docker instalado.

### Etapas

1. Execute o seguinte comando para construir e executar o projeto:

```sh
docker compose up -d
```

2. Acesse o [link do deploy local](http://localhost:3000).

## Referências

<p id="ref1">
    Entendendo threads e processos. IBM, 2024. Disponível em: <a href="https://www.ibm.com/docs/pt-br/aix/7.3?topic=programming-understanding-threads-processes">www.ibm.com<a/>. Acesso em: 11 mar. 2025.
</p>

<p id="ref2">
    STALLINGS, W. Operating systems: internals and design principles. 9th. ed. London: Pearson, 2018.
</p>

<p id="ref3">
    SERPA, Matheus Da Silva. Sistemas Operacionais: Conceitos de threads. S.l.: Sagah, 2024.
</p>
