# ♻️ Retech - Sistema de Gerenciamento de Descarte Tecnológico

## 📌 Sobre o Projeto
O **Retech** é uma aplicação web focada na gestão do ciclo de vida de ativos de TI. Este projeto acadêmico nasceu da necessidade de aplicar boas práticas de gerenciamento de infraestrutura, garantindo que o fluxo de equipamentos — desde o inventário até o descarte ou redirecionamento — seja rastreável, seguro e organizado.

A ferramenta foi idealizada para otimizar a rotina de suporte e a resolução de demandas relacionadas à substituição de peças, controle de sucata e envio de equipamentos para manutenção ou descarte ecológico.

## ⚙️ Arquitetura e Funcionalidades

O sistema foi estruturado de forma modular, dividindo as responsabilidades em diferentes fluxos operacionais:

### 👤 1. Controle de Acesso e Usuários (CRUD)
A segurança e a identificação de quem realiza as movimentações são fundamentais na gestão de ativos.
* **Create:** Tela de cadastro de novos técnicos/usuários com validação para evitar CPFs duplicados.
* **Read:** Sistema de login seguro que valida as credenciais e inicia a sessão no navegador.
* **Update:** Painel "Meu Perfil", onde o usuário logado pode atualizar suas informações pessoais e alterar sua senha.
* **Delete:** Opção de exclusão permanente da própria conta do sistema.
* **Recuperação:** Fluxo "Esqueci minha senha" para redefinição segura de acesso.

### 📦 2. Gestão de Inventário
Uma visão centralizada de todos os dispositivos disponíveis sob controle da equipe.
* Listagem dinâmica de equipamentos cadastrados.
* Identificação detalhada do estado do item (Novo, Seminovo, Usado, Com Defeito, Sucata).
* Exclusão de registros do banco de dados local com confirmação de segurança.

### ♻️ 3. Fluxo de Descarte e Saídas
O *core* do sistema, focado na movimentação e no fim do ciclo de vida dos ativos.
* **Entrada para Descarte:** Registro detalhado contendo o tipo de produto, quantidade, estado de conservação e o motivo técnico da baixa.
* **Saída de Itens:** Interface de seleção múltipla (checkbox) para despachar equipamentos do inventário para locais de destino (ex: centros de reciclagem, assistência técnica ou outras unidades).
* **Histórico (Audit Log):** Log completo de todos os itens movimentados, registrando a data e o destino, com a funcionalidade de estornar (retornar) o item para o inventário principal caso o envio seja cancelado.

## 💻 Tecnologias e Técnicas Utilizadas

O Retech foi desenvolvido utilizando tecnologias front-end focadas em performance e excelente UI/UX, operando de forma autônoma sem a necessidade imediata de um back-end externo:

* **HTML5:** Estruturação semântica e acessível.
* **CSS3 (Glassmorphism):** Interface moderna com efeitos de desfoque (*backdrop-filter*), design totalmente responsivo e paleta de cores focada em usabilidade (Dark Mode nativo).
* **JavaScript (Vanilla):** Manipulação fluida da DOM (*Document Object Model*) para renderização dinâmica de dados e tratamento de eventos em tempo real.
* **Web Storage API:** Utilização intensiva de `localStorage` para persistência e manipulação de dados em formato JSON (simulando um banco de dados) e `sessionStorage` para o controle de rotas protegidas e sessões ativas.
* **Notificações Customizadas (Toast):** Desenvolvimento de um sistema próprio de alertas visuais assíncronos, substituindo os pop-ups nativos do navegador para manter a consistência visual.
