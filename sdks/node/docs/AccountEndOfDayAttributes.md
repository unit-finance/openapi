# AccountEndOfDayAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date the account end-of-day resource was created. | [default to undefined]
**balance** | **number** | The balance amount (in cents). The balance equals the sum of \&#39;available\&#39; and \&#39;hold\&#39;. | [default to undefined]
**hold** | **number** | The hold amount (in cents). Not available for spending. | [default to undefined]
**available** | **number** | The available balance for spending (in cents). | [default to undefined]
**overdraftLimit** | **number** | Optional. The overdraft limit amount. | [optional] [default to undefined]

## Example

```typescript
import { AccountEndOfDayAttributes } from '@unit-finance/unit-node-sdk';

const instance: AccountEndOfDayAttributes = {
    date,
    balance,
    hold,
    available,
    overdraftLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
