# UpdateDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **{ [key: string]: any; }** | Optional. See Updating Tags. | [optional] [default to undefined]
**depositProduct** | **string** | Optional. Name of the selected deposit product (you can get the list of available deposit products using a dedicated API endpoint). | [optional] [default to undefined]
**name** | **string** | Optional. Account display name. | [optional] [default to undefined]
**overdraftLimit** | **number** | Optional. Overdraft limit in cents. Must be 0 or greater. | [optional] [default to undefined]

## Example

```typescript
import { UpdateDepositAccountDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: UpdateDepositAccountDataAttributes = {
    tags,
    depositProduct,
    name,
    overdraftLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
