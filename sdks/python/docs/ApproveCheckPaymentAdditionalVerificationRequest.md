# ApproveCheckPaymentAdditionalVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ApproveCheckPaymentAdditionalVerificationData**](ApproveCheckPaymentAdditionalVerificationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.approve_check_payment_additional_verification_request import ApproveCheckPaymentAdditionalVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApproveCheckPaymentAdditionalVerificationRequest from a JSON string
approve_check_payment_additional_verification_request_instance = ApproveCheckPaymentAdditionalVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(ApproveCheckPaymentAdditionalVerificationRequest.to_json())

# convert the object into a dict
approve_check_payment_additional_verification_request_dict = approve_check_payment_additional_verification_request_instance.to_dict()
# create an instance of ApproveCheckPaymentAdditionalVerificationRequest from a dict
approve_check_payment_additional_verification_request_from_dict = ApproveCheckPaymentAdditionalVerificationRequest.from_dict(approve_check_payment_additional_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


