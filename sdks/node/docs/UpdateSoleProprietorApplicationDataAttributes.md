# UpdateSoleProprietorApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **{ [key: string]: any; }** | See Updating Tags. | [default to undefined]
**annualRevenue** | [**SoleProprietorAnnualRevenueType**](SoleProprietorAnnualRevenueType.md) | Optional. Specify the annual revenue here. | [optional] [default to undefined]
**numberOfEmployees** | [**SoleProprietorNumberOfEmployeesType**](SoleProprietorNumberOfEmployeesType.md) | Optional. Specify the number of employees here. | [optional] [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Optional. Specify the business vertical here. | [optional] [default to undefined]
**website** | **string** | Optional. Specify the business website here. | [optional] [default to undefined]

## Example

```typescript
import { UpdateSoleProprietorApplicationDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: UpdateSoleProprietorApplicationDataAttributes = {
    tags,
    annualRevenue,
    numberOfEmployees,
    businessVertical,
    website,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
