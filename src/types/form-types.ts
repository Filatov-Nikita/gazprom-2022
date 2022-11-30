export type TAddress = {
  city: string,
  street: string,
  house: string,
  flat: string
}

export type PersonData = {
  name: string,
  lastName: string,
  patronymic: string
};

export type PassportData = {
  type: 'RF',
  serial: string,
  number: string,
  kod: string,
  issued: string,
  issuedDate: string
}

type ConfidantDocument = {
  number: string,
  createdAt: string,
  untilDate: string
};

export type NoConfidant = { hasDocument: 'No' };
export type HasConfidant = {
  hasDocument: 'Yes',
  passport: PassportData,
  document: ConfidantDocument,
  address: TAddress
};

export type ULData = {
  inn: string,
  kpp: string,
  ogrn: string,
  firstName: string,
  fullName: string,
};

export type MailAddress = {
  phone: string,
  email: string,
  additionalPhone: string
} & TAddress;

export type ObjectData = {
  name: string,
  cadastrNumber: string,
} & TAddress

type BaseNotifications = {
  sms: boolean,
  email: boolean,
}

export type PickupNotifications = { recieveMethod: 'pickup' } & BaseNotifications;
export type MailNotifications = {
  recieveMethod: 'mail',
  address: TAddress
} & BaseNotifications;
