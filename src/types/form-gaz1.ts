import {
    MailAddress,
    PersonData,
    ULData,
    PassportData,
    NoConfidant,
    HasConfidant,
    ObjectData,
    PickupNotifications,
    MailNotifications
  } from './form-types';

  type FLFilesBase = {
    inn: object
    passport: object,
    snils: object,
    contrAgentRef: object,
    techPassport: object,
    gasContract: object,
    bosLetter?: never,
    contrAgentMap?: never,
    branchRules?: never,
    ogrn?: never,
    placeNalog?: never,
    ugrul?: never,
    buhBalance?: never,
    contAgentPassport?: never,
    contrAgentAccess?: never,
    nextContrAgentPassport?: never,
    bankAccount?: never,
    informStatisticLetter?: never,
    owenrsInfo?: never,
    gasAcceptAct?: never,
  }

  type IPFiles = {
    ogrnip: object,
    cpo: object,
    nalogDeclare: object,
    financialReport: object,
    egrip: object,
    acceptAct?: never,
  } & FLFilesBase;

  type FLFiles = {
    cpo?: object,
    acceptAct: object,
    ogrnip?: never,
    nalogDeclare?: never,
    financialReport?: never,
    egrip?: never,
  } & FLFilesBase;

  type ULFiles = {
    bosLetter: object,
    contrAgentMap: object,
    branchRules: object,
    ogrn: object,
    placeNalog: object,
    ugrul: object,
    cpo?: object,
    buhBalance: object,
    contAgentPassport: object,
    contrAgentAccess: object,
    nextContrAgentPassport: object,
    bankAccount: object,
    informStatisticLetter: object,
    owenrsInfo: object,
    gasContract: object,
    gasAcceptAct: object,
    acceptAct?: never,
    ogrnip?: never,
    nalogDeclare?: never,
    financialReport?: never,
    egrip?: never,
  }

  type BaseForm = {
    object: 'kbo' | 'PP',
    mailAddress: MailAddress,
    objectData: ObjectData,
    notifications: PickupNotifications | MailNotifications,
  }

  type FLFields = {
    clientData: PersonData,
    passport: PassportData,
  } & BaseForm;

  type FormUL = {
    type: 'UL',
    isSmallBuisness: 'No',
    clientData: ULData,
    confidant: NoConfidant,
    files: ULFiles
  } & BaseForm;

  type FormULSmallBuisness = {
    type: 'UL',
    isSmallBuisness: 'Yes',
    clientData: ULData,
    confidant: NoConfidant,
    files: ULFiles & { smallBuisnessDeclare: object, bosRef?: never }
  } & BaseForm;

  type FormULWithConfident = {
    type: 'UL',
    isSmallBuisness: 'No',
    clientData: ULData,
    confidant: HasConfidant,
    files: ULFiles & { bosRef: object, smallBuisnessDeclare?: never }
  } & BaseForm;

  type FormULWithConfAndSmallBuisness = {
    type: 'UL',
    isSmallBuisness: 'Yes',
    clientData: ULData,
    confidant: HasConfidant,
    files: ULFiles & { bosRef: object, smallBuisnessDeclare: object }
  } & BaseForm;

  type FormFL = {
    type: 'FL',
    confidant: NoConfidant,
    files: FLFiles & { confidantPassport?: never }
  } & FLFields;

  type FormFLWithConfidant = {
    type: 'FL',
    confidant: HasConfidant,
    files: FLFiles & { confidantPassport: object }
  } & FLFields;

  type FormIP = {
    type: 'IP',
    confidant: NoConfidant,
    files: IPFiles & { confidantPassport?: never }
  } & FLFields;

  type FormIPWithConfidant = {
    type: 'IP',
    confidant: HasConfidant,
    files: IPFiles & { confidantPassport: object }
  } & FLFields;

  type FormValues =
    FormFL | FormFLWithConfidant | FormIP | FormIPWithConfidant | FormUL |
    FormULWithConfident | FormULSmallBuisness | FormULWithConfAndSmallBuisness;

  const t: FormValues = {
    type: 'UL',
    object: 'PP',
    isSmallBuisness: 'No',
    clientData: {
      inn: '1',
      kpp: '1',
      ogrn: '1',
      firstName: '1',
      fullName: '1',
    },
    mailAddress: {
      city: '1',
      street: '1',
      house: '1',
      flat: '1',
      phone: '1',
      email: '1@1.ru',
      additionalPhone: '1',
    },
    objectData: {
      name: '1',
      cadastrNumber: '0000',
      city: '1',
      street: '1',
      house: '1',
      flat: '1'
    },
    confidant: {
      hasDocument: 'Yes',
      passport: {
        type: 'RF',
        serial: '0000',
        number: '0000000',
        kod: '020-008',
        issued: 'MVD',
        issuedDate: '01.01.1900'
      },
      address: {
        city: '1',
        street: '1',
        house: '1',
        flat: '1'
      },
      document: {
        number: '0000',
        createdAt: '01.01.1900',
        untilDate: '01.01.1900'
      }
    },
    notifications: {
      sms: true,
      email: false,
      recieveMethod: 'pickup',
    },
    files: {
      bosRef: {},
      // smallBuisnessDeclare: {},
      bosLetter: {},
      contrAgentMap: {},
      branchRules: {},
      ogrn: {},
      placeNalog: {},
      ugrul: {},
      cpo: {},
      buhBalance: {},
      contAgentPassport: {},
      contrAgentAccess: {},
      nextContrAgentPassport: {},
      bankAccount: {},
      informStatisticLetter: {},
      owenrsInfo: {},
      gasContract: {},
      gasAcceptAct: {},
    }
  };
