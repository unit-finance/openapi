# CheckPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**status** | **string** | One of New, Pending, PendingCancellation, Canceled,InDelivery, Delivered, ReturnedToSender, Processed, PendingReview, MarkedForReturn, Returned, Rejected. | [default to undefined]
**amount** | **number** | The amount (cents) of the check deposit. | [default to undefined]
**description** | **string** | Description of the Check Payment. | [default to undefined]
**checkNumber** | **string** | The serial number printed at the bottom of the check | [optional] [default to undefined]
**originated** | **boolean** | True for checks originated through Unit | [optional] [default to undefined]
**onUs** | **string** |  | [optional] [default to undefined]
**onUsAuxiliary** | **string** |  | [optional] [default to undefined]
**counterpartyRoutingNumber** | **string** | The routing number of the party that deposited the Check. | [optional] [default to undefined]
**returnStatusReason** | **string** | The reason the Check Payment has been marked for return or returned. See Check Payment return reasons. | [optional] [default to undefined]
**rejectReason** | **string** |  | [optional] [default to undefined]
**pendingReviewReasons** | **Array&lt;string&gt;** | List of reasons as to why the Check Payment is in pending review status, more reasons may be added in the future, current possible reasons: SoftLimit. | [optional] [default to undefined]
**returnCutoffTime** | **string** | The last time when a return will be accepted using the return Check Payment endpoint. | [optional] [default to undefined]
**additionalVerificationStatus** | **string** | Optional. One of \&#39;Required\&#39;, \&#39;NotRequired\&#39; or \&#39;Approved\&#39;, when Requires an additional verification will be required, see Approve Additional Verification. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**deliveryStatus** | **string** | One of Mailed, InLocalArea, Delivered, Rerouted, ReturnedToSender. Available once check status is InDelivery | [optional] [default to undefined]
**trackedAt** | **string** | The date of the last delivery status update. | [optional] [default to undefined]
**postalCode** | **string** | The location of the last delivery status update. | [optional] [default to undefined]
**expirationDate** | **string** | check expiration date, formatted YYYY-MM--DD, e.g \&quot;2020-05-01\&quot;. | [optional] [default to undefined]
**expectedDelivery** | **string** | check expected delivery date, formatted YYYY-MM--DD, e.g \&quot;2020-05-01\&quot;. | [optional] [default to undefined]
**sendAt** | **string** | The date and time in which the check is to be sent. | [optional] [default to undefined]
**counterparty** | [**CheckPaymentCounterpartyType**](CheckPaymentCounterpartyType.md) | The receiving party of the check. | [default to undefined]
**memo** | **string** | Text included on the memo line of the check. | [optional] [default to undefined]

## Example

```typescript
import { CheckPaymentAttributes } from '@unit-finance/unit-node-sdk';

const instance: CheckPaymentAttributes = {
    createdAt,
    updatedAt,
    status,
    amount,
    description,
    checkNumber,
    originated,
    onUs,
    onUsAuxiliary,
    counterpartyRoutingNumber,
    returnStatusReason,
    rejectReason,
    pendingReviewReasons,
    returnCutoffTime,
    additionalVerificationStatus,
    tags,
    deliveryStatus,
    trackedAt,
    postalCode,
    expirationDate,
    expectedDelivery,
    sendAt,
    counterparty,
    memo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
