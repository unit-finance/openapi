# WireTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**imadOmad** | **{ [key: string]: any; }** | (Conditional) IMAD/OMAD - Input/Output Message Accountability Data. It\&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. | [default to undefined]
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction, either the beneficiary or the originator. | [default to undefined]
**description** | **string** | Description of the transaction as entered by the originator. | [optional] [default to undefined]
**originatorToBeneficiaryInformation** | **string** | Originator To Beneficiary Information, multi-line string delimited by \\n. | [default to undefined]
**senderReference** | **string** | Sender reference. | [default to undefined]
**referenceForBeneficiary** | **string** | Reference for the Beneficiary. | [default to undefined]
**beneficiaryInformation** | **string** | Beneficiary Information, multi-line string delimited by \\n. | [default to undefined]
**beneficiaryAdviceInformation** | **string** | Beneficiary Advice Information, multi-line string delimited by \\n. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { WireTransactionAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: WireTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    imadOmad,
    counterparty,
    description,
    originatorToBeneficiaryInformation,
    senderReference,
    referenceForBeneficiary,
    beneficiaryInformation,
    beneficiaryAdviceInformation,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
