# CreateBusinessCreditCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullName** | [**FullNameType**](FullNameType.md) | Full name of the card holder. | [default to undefined]
**dateOfBirth** | **string** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the card holder. | [default to undefined]
**shippingAddress** | [**AddressType**](AddressType.md) | Address to ship the card to. If not specified, card holder address is used. | [optional] [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. | [default to undefined]
**email** | **string** | Email address of the card holder. | [default to undefined]
**design** | **string** | You may omit if you only have one card design. Please contact Unit if you need multiple card designs. | [optional] [default to undefined]
**additionalEmbossedText** | **string** | Optional, up to 21 characters. Use for a second cardholder name, company name, or other data to be embossed on a card. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**limits** | **{ [key: string]: any; }** | See Limits (cents). | [optional] [default to undefined]
**printOnlyBusinessName** | **boolean** | Optional, default is false. Print the business name on the card instead of the card holder\&#39;s name. | [optional] [default to undefined]
**expiryDate** | **string** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] [default to undefined]
**ssn** | **string** | Optional. SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. It is optional to provide only last 4 SSN digits. | [optional] [default to undefined]
**passport** | **string** | Passport number of the individual. Valid only for non-US persons. | [optional] [default to undefined]
**nationality** | **string** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] [default to undefined]

## Example

```typescript
import { CreateBusinessCreditCardDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateBusinessCreditCardDataAttributes = {
    fullName,
    dateOfBirth,
    address,
    shippingAddress,
    phone,
    email,
    design,
    additionalEmbossedText,
    idempotencyKey,
    tags,
    limits,
    printOnlyBusinessName,
    expiryDate,
    ssn,
    passport,
    nationality,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
