# CheckPaymentCounterpartyType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the person or company that owns the bank account. Cannot exceed 40 characters. | [default to undefined]
**address** | [**AddressType**](AddressType.md) | The payee\&#39;s address. The length of street and street2 combined cannot exceed 50 characters. | [default to undefined]
**counterpartyMoved** | **boolean** | True if the counterparty\&#39;s address has been modified to correspond with a National Change of Address applied on the address. See guide for further information. | [optional] [default to undefined]

## Example

```typescript
import { CheckPaymentCounterpartyType } from 'unit-openapi-node-sdk';

const instance: CheckPaymentCounterpartyType = {
    name,
    address,
    counterpartyMoved,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
