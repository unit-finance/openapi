# ACHPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | One of Pending, PendingReview, Rejected, Clearing, Sent, Canceled, Returned. See ACH Status. | [default to undefined]
**reason** | **string** | Optional. More information about the status. | [optional] [default to undefined]
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other side of the ACH payment. | [default to undefined]
**direction** | **string** | The direction in which the funds flow (either Debit or Credit). | [default to undefined]
**description** | **string** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | [default to undefined]
**addenda** | **string** | Optional, additional payment description (maximum of 50 characters), not all institutions present that. | [optional] [default to undefined]
**amount** | **number** | The amount (cents) of the payment. | [default to undefined]
**settlementDate** | **string** | Optional, for ACH debit with statuses Pending, Clearing, shows the date on which the payment will be settled. | [optional] [default to undefined]
**expectedCompletionDate** | **string** | Optional, for ACH credit with statuses Pending, Sent, shows the date on which the counterparty will handle the request. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]
**counterpartyVerificationMethod** | **string** | Optional, shows the verification method of the counterparty: \&#39;Plaid\&#39;. | [optional] [default to undefined]
**sameDay** | **boolean** | Indicates whether the payment is a Same Day ACH payment. See Same Day ACH. | [default to undefined]
**secCode** | **string** | The 3-letter ACH Standard Entry Class (SEC) Code. One of WEB, CCD, PPD. | [default to undefined]

## Example

```typescript
import { ACHPaymentAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: ACHPaymentAttributes = {
    createdAt,
    status,
    reason,
    counterparty,
    direction,
    description,
    addenda,
    amount,
    settlementDate,
    expectedCompletionDate,
    tags,
    counterpartyVerificationMethod,
    sameDay,
    secCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
