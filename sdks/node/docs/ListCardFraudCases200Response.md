# ListCardFraudCases200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;ListCardFraudCases200ResponseDataInner&gt;**](ListCardFraudCases200ResponseDataInner.md) | Array of card fraud case resources. Each resource can be either Transaction or Authorization, as indicated by the type field. | [default to undefined]
**meta** | [**Meta**](Meta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListCardFraudCases200Response } from '@unit-finance/unit-openapi-node-sdk';

const instance: ListCardFraudCases200Response = {
    data,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
