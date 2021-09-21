<template>
  <div id="home" class="content">
    <div class="container">
      <section class="data--header">
        <div class="data--header--col-left">
          <div class="icon">
            <nuxt-link to="/">
              <IconDirection class="icon-left" />
            </nuxt-link>
          </div>
          <div class="body">
            <div class="title">Formalizações</div>
            <span class="subtitle"
              >Aprovadas - {{ formatDate(cessao.criadoEm) }}</span
            >
          </div>
        </div>
        <div class="data--header--col-right">
          <button class="button button-primary">Gerar Cnab</button>
        </div>
      </section>

      <section class="data--info box">
        <div class="title">Total formalizações</div>
        <div class="data--info--grid">
          <div class="item">
            <div class="item--title">Valor financiado</div>
            <div class="item--values">
              <div class="col">
                <span>PF</span>R$ {{ formatCurrency(cessao.pf.financiado) }}
              </div>
              <div class="col">
                <span>PJ</span>R$ {{ formatCurrency(cessao.pj.financiado) }}
              </div>
            </div>
            <div class="item--total">
              Total R$
              <span>{{ formatCurrency(cessao.total.financiado) }}</span>
            </div>
          </div>
          <div class="item">
            <div class="item--title">Valor bruto</div>
            <div class="item--values">
              <div class="col">
                <span>PF</span> {{ formatCurrency(cessao.pf.bruto) }}
              </div>
              <div class="col">
                <span>PJ</span> R$ {{ formatCurrency(cessao.pf.bruto) }}
              </div>
            </div>
            <div class="item--total">
              Total R$ <span>{{ formatCurrency(cessao.pf.bruto) }}</span>
            </div>
          </div>
          <div class="item">
            <div class="item--title">Valor de aquisição</div>
            <div class="item--values">
              <div class="col">
                <span>PF</span> R$ {{ formatCurrency(cessao.pf.aquisicao) }}
              </div>
              <div class="col">
                <span>PJ</span> R$ {{ formatCurrency(cessao.pf.aquisicao) }}
              </div>
            </div>
            <div class="item--total">
              Total R$ <span>{{ formatCurrency(cessao.pf.aquisicao) }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="data--table box">
        <div class="table-container">
          <table class="table">
            <thead class="table--head">
              <tr>
                <th>Nome do cliente</th>
                <th>Valor financiado</th>
                <th>Valor bruto</th>
                <th>Valor de aquisição</th>
                <th>Prazo</th>
                <th>N.º CCB</th>
              </tr>
            </thead>
            <tbody class="table--body">
              <tr v-for="(item, index) in detalhes" :key="index">
                <td>
                  <span class="value-top">{{ item.nomeCompleto }}</span>
                  <span class="value-bottom">{{ item.cpf }}</span>
                </td>
                <td>R$ {{ formatCurrency(item.valorFinanciado) }}</td>
                <td>R$ {{ formatCurrency(item.valorBruto) }}</td>
                <td>R$ {{ formatCurrency(item.valorAquisicao) }}</td>
                <td>
                  <span class="value-top">{{ item.parcelas }}x</span>
                  <span class="value-bottom">{{ formatFixado(item.cet) }}</span>
                </td>
                <td>{{ item.numCcb }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { formatCurrency, formatDate, formatFixado } from '@/utils/common'
export default {
  async fetch({ store }) {
    await store.dispatch('table/get')
  },
  head() {
    return {
      title: 'Formalizações',
    }
  },
  computed: {
    dataInfo() {
      return this.$store.getters['table/getList']
    },
    cessao() {
      return this.dataInfo.cessao
    },
    detalhes() {
      return this.dataInfo.detalhes
    },
  },
  methods: {
    formatCurrency,
    formatDate,
    formatFixado,
  },
}
</script>

<style lang="scss">
.data--header {
  @apply flex flex-col justify-between py-20 bg-no-repeat bg-right-top sm:flex-row sm:items-center;
  background-image: url(/images/rococo.svg);
  &--col-left {
    @apply flex items-center mb-4 md:mb-0;
    .icon-left {
      @apply w-12 h-12 lg:w-16 lg:h-16;
    }
    .body {
      @apply ml-4;
    }
    .title {
      @apply text-large md:text-giant;
    }
    .subtitle {
      @apply font-medium text-base;
    }
  }
  &--col-right {
    .button {
      @apply w-full;
    }
  }
}

.data--info {
  @apply text-sm mb-10;
  .title {
    @apply font-medium text-xl mb-4;
  }
  &--grid {
    @apply grid grid-cols-1 gap-4 md:grid-cols-3;
    .item {
      @apply rounded bg-secondary text-white p-4;
      &--title {
        @apply font-medium;
      }
      &--values {
        @apply grid grid-cols-1 gap-2 sm:grid-cols-2 font-extralight font-mono my-1;
        .col {
          @apply border border-gray-400 rounded py-1 px-2;
          span {
            @apply mr-1;
          }
        }
      }
      &--total {
        @apply text-primary text-base font-medium;
        span {
          @apply text-xl;
        }
      }
    }
  }
}

.data--table {
  .table {
    @apply table-auto w-full border-separate;
    border-spacing: 0 8px;
    th,
    td {
      @apply p-4 whitespace-nowrap;
    }
    &--head {
      th {
        @apply bg-middle-gray border-b border-primary text-left text-secondary font-medium;
        &:first-child {
          @apply block rounded-l;
        }
        &:last-child {
          @apply block rounded-r;
        }
      }
    }
    &--body {
      td {
        @apply font-mono text-sm border-t border-b border-middle-gray;
        &:first-child {
          @apply border-l rounded-l;
        }
        &:last-child {
          @apply border-r rounded-r;
        }
      }
      .value-top,
      .value-bottom {
        @apply flex capitalize;
      }
      .value-bottom {
        @apply text-xs;
      }
    }
  }
}
</style>
