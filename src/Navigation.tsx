import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <ol>
        <li>
          <NavLink to="/novos-hooks-fundamentais" end>
            Novos Hooks Fundamentais
          </NavLink>
        </li>
        <li>
          <NavLink to="/server-components-e-composicao-avancada" end>
            Server Components e Composição Avançada
          </NavLink>
        </li>
        <li>
          <NavLink to="/acoes-e-gerenciamento-de-formularios">
            Ações e Gerenciamento de Formulários
          </NavLink>
        </li>
        <li>
          <NavLink to="/otimizacoes-de-performance">
            Otimizações de Performance
          </NavLink>
        </li>
        <li>
          <NavLink to="/padroes-avancados-de-composicao">
            Padrões Avançados de Composição
          </NavLink>
        </li>
        <li>
          <NavLink to="/gerenciamento-de-efeitos-complexos">
            Gerenciamento de Efeitos Complexos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contexto-avancado">
            Contexto Avançado
          </NavLink>
        </li>
        <li>
          <NavLink to="/testes-e-debugging">
            Testes e Debugging
          </NavLink>
        </li>
        <li>
          <NavLink to="/padroes-de-carregamento">
            Padrões de Carregamento
          </NavLink>
        </li>
        <li>
          <NavLink to="/integracao-com-bibliotecas-externas">
            Integração com Bibliotecas Externas
          </NavLink>
        </li>
      </ol>
    </nav>
  );
}