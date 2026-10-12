# CreateCardholderTokenDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **string** | list of Scopes separated by spaces. Only cards (cards cards-sensitive cards-write cards-sensitive-write) scopes are allowed. | [default to undefined]
**verificationToken** | **string** | Required if scope includes a scope which requires two-factor authentication. Received as a response from Create Cardholder Token Verification. | [default to undefined]
**verificationCode** | **string** | Required if scope includes a scope which requires two-factor authentication. 6 digit code sent to the card holder through the desired channel. | [default to undefined]
**expiresIn** | **number** | The lifetime of the token (in seconds). Maximum value is 86400 (24 hours). Default value is also 24 hours. | [optional] [default to undefined]
**upgradableScope** | **string** | list of Scopes separated by spaces. The card holder will be able to upgrade the token to the scopes you provide here. | [optional] [default to undefined]

## Example

```typescript
import { CreateCardholderTokenDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateCardholderTokenDataAttributes = {
    scope,
    verificationToken,
    verificationCode,
    expiresIn,
    upgradableScope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
