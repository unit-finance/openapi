# CreateCardholderTokenVerificationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Send a verification code to the card holder through one of the following channels - sms or call. | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | This allows providing the phone number of one of the customer\&#39;s authorized users. The provided phone must match an authorized user phone and will be used in the One Time Password (OTP) authentication process instead of the business customer contact\&#39;s phone. | [optional] [default to undefined]
**appHash** | **string** | For sms verifications only, 11-character hash string that identifies your app. Appended at the end of your verification SMS body the way that client-side SMS Retriever API expects. | [optional] [default to undefined]
**language** | **string** | Select the verification language using a 2-letter code. Default is English. See Localization Options for the supported languages and their 2-letter code. | [optional] [default to undefined]

## Example

```typescript
import { CreateCardholderTokenVerificationDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateCardholderTokenVerificationDataAttributes = {
    channel,
    phone,
    appHash,
    language,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
