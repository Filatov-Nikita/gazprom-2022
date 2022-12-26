<template>
  <FormGroup v-if="type !== undefined" class="tw-space-y-5" label="Файлы">
    <AppFile v-for="field in fields" v-bind="field" :key="field.name" />
  </FormGroup>
</template>

<script setup lang="ts">
  import FormGroup from './FormGroup.vue';
  import AppFile from '@/core/AppFile.vue';
  import { useFieldValue } from 'vee-validate';
  import { computed } from 'vue';

  const type = useFieldValue('type');
  const confidant = useFieldValue('confidant.hasDocument');
  const isSmallBuisness = useFieldValue('clientData.isSmallBuisness');

  const accept = 'image/png,image/jpeg,application/pdf';

  const FLANDIPConfidantFields = [
    {
      accept,
      name: 'confidantPassport',
      label: 'Копия документа, удостоверяющего личность представителя заявителя',
      rules: 'required'
    }
  ];

  const ULConfidantFields = [
    {
      accept,
      name: 'bosRef',
      label: 'Документ, свидетельствующий о наличии у лица, выступающего от имени будущего контрагента (подписывающего договор), полномочий на представительство и подписание документов и договоров (решение общего собрания юр. Лица, совета директоров, иных высших, исполнительных органов юр. лиц о назначении на должность директора, ген. директора, доверенность)',
      rules: 'required'
    }
  ];

  const ULSmallBuisnessFields = [
    {
      accept,
      name: 'smallBuisnessDeclare',
      label: 'Декларация о субъекте малого предпринимательств, либо письмо, подтверждающее статус малого (среднего) предпринимательства',
      rules: 'required'
    }
  ]

  const FL_AND_IP_FILES = [
    {
      accept,
      name: 'files.inn',
      label: 'Свидетельство о постановке на налоговый учет (ИНН)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.passport',
      label: 'Копия документа документа, удостоверяющий личность (Паспорт)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.snils',
      label: 'СНИЛС',
      rules: 'required'
    },
    {
      accept,
      name: 'files.contrAgentRef',
      label: 'Справка (оригинал) за подписью контрагента, с указанием лиц, имеющих право подписывать бухгалтерские документы, с образцами подписей уполномоченных лиц',
      rules: 'required'
    },
    {
      accept,
      name: 'files.techPassport',
      label: 'Выписка из Единого Государственного реестра прав на недвижимое имущество, земельный участок и тех. паспорт',
      rules: 'required'
    },
    {
      accept,
      name: 'files.gasContract',
      label: 'Договор поставки газа',
      rules: 'required'
    },
  ];

  const FLFiles = [
    ...FL_AND_IP_FILES,
    {
      accept,
      name: 'files.cpo',
      label: 'Лицензии (СРО) (при наличии)',
    },
    {
      accept,
      name: 'files.acceptAct',
      label: 'Акт приемки законченного строительством объекта газораспределительной системы',
      rules: 'required'
    },
  ];

  const IPFiles = [
    ...FL_AND_IP_FILES,
    {
      accept,
      name: 'files.cpo',
      label: 'Лицензии (СРО)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.ogrnip',
      label: 'Свидетельство о государственный регистрационный номер индивидуального предпринимателя (ОГРНИП)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.nalogDeclare',
      label: 'Налоговая декларация и иные сведения, представляемые в налоговые органы, а также доказательства представления отчетности в налоговый орган',
      rules: 'required'
    },
    {
      accept,
      name: 'files.financialReport',
      label: 'Сведения о финансовых операциях предпринимателя, отражающие объемы оборота по упрощенной системе учета',
      rules: 'required'
    },
    {
      accept,
      name: 'files.egrip',
      label: 'Выписка из ЕГРИП, выданная не ранее 1 месяца до даты заключения договора',
      rules: 'required'
    },
  ];

  const ULFiles = [
    {
      accept,
      name: 'files.bosLetter',
      label: 'Письмо на имя директора филиала',
      rules: 'required'
    },
    {
      accept,
      name: 'files.contrAgentMap',
      label: 'Карта партнера контрагента',
      rules: 'required'
    },
    {
      accept,
      name: 'files.branchRules',
      label: 'Устав, для филиалов еще и положение о филиале, зарегистрированные и оформленные надлежащим образом',
      rules: 'required'
    },
    {
      accept,
      name: 'files.ogrn',
      label: 'Свидетельство «О государственной регистрации юридического лица» (ОГРН)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.placeNalog',
      label: 'Свидетельство «О постановке на налоговый учет по месту нахождения юридического лица, для филиалов еще и уведомление о постановке на налоговый учет по месту нахождения филиала',
      rules: 'required'
    },
    {
      accept,
      name: 'files.ugrul',
      label: 'Выписка из ЕГРЮЛ, выданная не ранее 1 месяца до даты заключения договора',
      rules: 'required'
    },
    {
      accept,
      name: 'files.cpo',
      label: 'Лицензии (СРО), Свидетельство о вступлении юридического лица в саморегулируемую организацию, свидетельство о допуске к выполнению определенного вида работ на виды деятельности, могущие входить в содержание будущих отношений по сделке (при наличии)',
    },
    {
      accept,
      name: 'files.buhBalance',
      label: 'Бухгалтерский баланс предприятия за последний отчетный период, а также доказательство его представления в налоговые органы. При введении у юридического лица упрощенной системы налогообложения – налоговую декларацию, уведомление (письмо) о введении упрощенной системы налогообложения; (декларация СПМ)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.contAgentPassport',
      label: 'Документ, удостоверяющий личность руководителя контрагента (копия паспорта)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.contrAgentAccess',
      label: 'Документ, свидетельствующий о наличии у лица, выступающего от имени будущего контрагента (подписывающего договор), полномочий на представительство и подписание документов и договоров (решение общего собрания юр. Лица, совета директоров, иных высших, исполнительных органов юр. лиц о назначении на должность директора, ген. директора, доверенность)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.nextContrAgentPassport',
      label: 'Документ, удостоверяющий личность представителя будущего контрагента',
      rules: 'required'
    },
    {
      accept,
      name: 'files.bankAccount',
      label: 'Справка из банка, подтверждающая наличие расчетного счета',
      rules: 'required'
    },
    {
      accept,
      name: 'files.informStatisticLetter',
      label: 'Информационное письмо Государственного комитета РБ по статистике (коды статистики)',
      rules: 'required'
    },
    {
      accept,
      name: 'files.owenrsInfo',
      label: 'Информация о собственниках (учредителях, акционерах, бенефициарах) контрагента',
      rules: 'required'
    },
    {
      accept,
      name: 'files.gasContract',
      label: 'Обязательный пункт: Договор поставки газа',
      rules: 'required'
    },
    {
      accept,
      name: 'files.gasAcceptAct',
      label: 'Акт ввода в эксплуатацию объекта, акт приемки законченного строительством объекта газораспределительной системы',
      rules: 'required'
    },
  ]

  const FL = computed(() => {
    const hasConfidant = confidant.value === 'Yes'

    if(hasConfidant) {
      return [
        ...FLFiles,
        ...FLANDIPConfidantFields
      ]
    }

    return FLFiles;
  });

  const IP = computed(() => {
    const hasConfidant = confidant.value === 'Yes'

    if(hasConfidant) {
      return [
        ...IPFiles,
        ...FLANDIPConfidantFields
      ]
    }

    return IPFiles;
  });

  const UL = computed(() => {
    const hasConfidant = confidant.value === 'Yes';
    const isSmall = isSmallBuisness.value === 'Yes';
    const buffer = [ ...ULFiles ];

    if(hasConfidant) buffer.push(...ULConfidantFields);
    if(isSmall) buffer.push(...ULSmallBuisnessFields);

    return buffer;
  });

  const fields = computed(() => {
    if(type.value === undefined) return [];
    else if(type.value === 'FL') return FL.value;
    else if(type.value === 'IP') return IP.value;
    else if(type.value === 'UL') return UL.value;

    else return [];
  });
</script>
