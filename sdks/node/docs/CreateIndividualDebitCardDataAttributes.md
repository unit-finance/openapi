# CreateIndividualDebitCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingAddress** | [**AddressType**](AddressType.md) | Address to ship the card to. If not specified, the individual address is used. | [optional] [default to undefined]
**design** | **string** | You may omit if you only have one card design. Please contact Unit if you need multiple card designs. | [optional] [default to undefined]
**additionalEmbossedText** | **string** | Optional, up to 21 characters. Use for a second cardholder name, company name, or other data to be embossed on a card. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**limits** | **{ [key: string]: any; }** | See Limits (cents). | [optional] [default to undefined]
**printOnlyBusinessName** | **boolean** | Optional, default is false. Print the business name on the card instead of the card holder\&#39;s name. Available only for Sole Proprietorship typed customers that have a DBA property. | [optional] [default to undefined]
**expiryDate** | **string** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] [default to undefined]

## Example

```typescript
import { CreateIndividualDebitCardDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateIndividualDebitCardDataAttributes = {
    shippingAddress,
    design,
    additionalEmbossedText,
    idempotencyKey,
    tags,
    limits,
    printOnlyBusinessName,
    expiryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
