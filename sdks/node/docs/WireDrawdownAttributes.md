# WireDrawdownAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**amount** | **number** | The amount (cents) of the wire drawdown. | [default to undefined]
**description** | **string** | Wire drawdown description. | [default to undefined]
**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The beneficiary party on the other end of the wire drawdown. | [default to undefined]
**direction** | **string** | The direction of the wire drawdown, either Incoming or Outgoing. | [default to undefined]
**imad** | **string** | Input Message Accountability Data. It\&#39;s a unique number given to each wire drawdown. | [optional] [default to undefined]
**omad** | **string** | Output Message Accountability Data. It\&#39;s a unique number given to each wire drawdown. | [optional] [default to undefined]
**senderReference** | **string** | Sender reference. | [optional] [default to undefined]
**referenceForBeneficiary** | **string** | Reference for the Beneficiary. | [optional] [default to undefined]
**beneficiaryInformation** | **string** | Beneficiary Information, multi-line string delimited by \\n. | [optional] [default to undefined]
**beneficiaryAdviceInformation** | **string** | Beneficiary Advice Information, multi-line string delimited by \\n. | [optional] [default to undefined]
**originatorToBeneficiaryInformation** | **string** | Originator To Beneficiary Information, multi-line string delimited by \\n. | [optional] [default to undefined]

## Example

```typescript
import { WireDrawdownAttributes } from '@unit-finance/unit-node-sdk';

const instance: WireDrawdownAttributes = {
    createdAt,
    amount,
    description,
    counterparty,
    direction,
    imad,
    omad,
    senderReference,
    referenceForBeneficiary,
    beneficiaryInformation,
    beneficiaryAdviceInformation,
    originatorToBeneficiaryInformation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
