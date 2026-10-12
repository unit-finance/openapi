# InstitutionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routingNumber** | **string** | Routing number of the institution. Valid 9-digit ABA routing transit number. | [default to undefined]
**name** | **string** | Name of the institution. | [default to undefined]
**address** | **string** | Address of the institution. | [optional] [default to undefined]
**isACHSupported** | **boolean** | Is FedACH participant. | [default to undefined]
**isWireSupported** | **boolean** | Is Fedwire participant. | [default to undefined]

## Example

```typescript
import { InstitutionAttributes } from 'unit-openapi-node-sdk';

const instance: InstitutionAttributes = {
    routingNumber,
    name,
    address,
    isACHSupported,
    isWireSupported,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
