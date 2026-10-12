# AtmAuthorizationRequestAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**amount** | **number** | The amount (cents) of the authorization request. | [default to undefined]
**status** | **string** | The status of the authorization request. | [default to undefined]
**outcome** | **string** | What your programmatic integration produced when the request reached a terminal decision. See Understanding authorization decisions. | [optional] [default to undefined]
**direction** | **string** | The direction of the transaction (Credit or Debit). | [default to undefined]
**atmName** | **string** | The name of the ATM. | [default to undefined]
**atmLocation** | **string** | The location of the ATM. | [default to undefined]
**surcharge** | **number** | The surcharge amount in cents. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. When the authorization request was auto-completed using the timeout strategy, this field may also contain decision_source and timeout_strategy; prefer the outcome attribute for new integrations. | [default to undefined]

## Example

```typescript
import { AtmAuthorizationRequestAttributes } from 'unit-openapi-node-sdk';

const instance: AtmAuthorizationRequestAttributes = {
    createdAt,
    amount,
    status,
    outcome,
    direction,
    atmName,
    atmLocation,
    surcharge,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
