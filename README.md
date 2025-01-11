
# Teste Pratico

React + TypeScript + Vite

Este projeto é uma aplicação em React que simula cálculos diversos, como soma incremental, cálculo de Fibonacci, faturamento diário, faturamento mensal por estado e inversão de strings. Ele permite ao usuário interagir com os dados, visualizar os resultados de forma dinâmica e alterar parâmetros de entrada para ver os resultados atualizados.

## Funcionalidades Implementadas

### 1. **Soma Incremental**
   - Este cálculo segue um algoritmo que soma valores de 1 até o índice fornecido.
   - O índice padrão é 13, mas o usuário pode alterá-lo e ver a soma atualizada em tempo real.

### 2. **Sequência de Fibonacci**
   - A sequência de Fibonacci começa com 0 e 1. O próximo valor é a soma dos dois anteriores.
   - O usuário pode fornecer um número e o sistema irá calcular a sequência até esse número, além de verificar se o número pertence à sequência.

### 3. **Faturamento Diário**
   - A aplicação recebe dados de faturamento diário e calcula:
     - O menor valor de faturamento.
     - O maior valor de faturamento.
     - O número de dias em que o faturamento foi superior à média.
   - Os dados são exibidos em cards de maneira visual e interativa.

### 4. **Faturamento Mensal por Estado**
   - A aplicação calcula o percentual de participação de cada estado no faturamento total mensal.
   - As informações de faturamento são apresentadas em cards, com o fundo colorido para destacar os valores.

### 5. **Inversão de String**
   - Um simples algoritmo que inverte os caracteres de uma string informada pelo usuário.

## Estrutura do Projeto

A aplicação foi desenvolvida em React, utilizando hooks como `useState` para gerenciar estados e `useEffect` quando necessário.

### Estrutura de Diretórios:

```
/src
  /components
    - Sum.tsx              # Componente de soma incremental
    - Fibonacci.tsx        # Componente de Fibonacci
    - DailyBilling.tsx     # Componente de faturamento diário
    - MonthlyBilling.tsx   # Componente de faturamento mensal
    - Invert.tsx           # Componente de inversão de string
  /problems
    - Sum.ts               # Função de cálculo da soma incremental
    - Fibonacci.ts         # Função de cálculo da sequência de Fibonacci
    - Dailybilling.ts      # Função de cálculo de faturamento diário
    - Monthlybilling.ts    # Função de cálculo de faturamento mensal por estado
    - Invert.ts            # Função de inversão de string
  App.tsx                  # Componente principal que renderiza os resultados
  index.tsx                # Arquivo de entrada da aplicação
```

### Dependências Utilizadas

- React: Biblioteca para construir interfaces de usuário.
- TypeScript: Superset de JavaScript que adiciona tipagem estática.
- Styled Components ou CSS-in-JS (opcional): Para estilização da aplicação.

### Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/Yalecoder/practice-test-tsy.git
```

2. **Instale as dependências:**

```bash
cd practice-test-tsy
npm install ou yarn
```

3. **Execute a aplicação:**

```bash
npm start
```

Isso irá rodar a aplicação no navegador. Normalmente, ela estará disponível em `http://localhost:3000`.

## Explicação do Código

### `Sum.tsx`

Este componente é responsável por exibir e calcular a soma incremental até um índice fornecido. O usuário pode alterar o índice e ver a soma atualizada em tempo real. A função `calcularSomaIncremental` é chamada toda vez que o valor do índice é alterado, e o resultado é recalculado dinamicamente.

### `Fibonacci.tsx`

Este componente é responsável

### `DailyBilling.tsx`

Exibe três cards com as informações de faturamento diário:
- Menor valor de faturamento.
- Maior valor de faturamento.
- Dias com faturamento superior à média.

Os cálculos são feitos usando a função `analisarFaturamento`, que processa um vetor de dados de faturamento diário.

### `MonthlyBilling.tsx`

Mostra o percentual de participação de cada estado no faturamento mensal. O estado do Brasil é usado como exemplo, e o cálculo é feito pela função `calcularPercentualPorEstado`. O resultado é exibido em cards com o fundo colorido para destacar as informações.

### `Invert.tsx`

Componente simples que permite inverter uma string fornecida pelo usuário. Essa função pode ser usada para manipulação de texto e testes de lógica.

## Licença

Este projeto é de código aberto e licenciado sob a [Licença MIT](LICENSE).
