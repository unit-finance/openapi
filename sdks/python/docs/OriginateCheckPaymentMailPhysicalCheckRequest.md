# OriginateCheckPaymentMailPhysicalCheckRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OriginateCheckPaymentMailPhysicalCheckData**](OriginateCheckPaymentMailPhysicalCheckData.md) |  | 

## Example

```python
from unit_finance_sdk.models.originate_check_payment_mail_physical_check_request import OriginateCheckPaymentMailPhysicalCheckRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OriginateCheckPaymentMailPhysicalCheckRequest from a JSON string
originate_check_payment_mail_physical_check_request_instance = OriginateCheckPaymentMailPhysicalCheckRequest.from_json(json)
# print the JSON string representation of the object
print(OriginateCheckPaymentMailPhysicalCheckRequest.to_json())

# convert the object into a dict
originate_check_payment_mail_physical_check_request_dict = originate_check_payment_mail_physical_check_request_instance.to_dict()
# create an instance of OriginateCheckPaymentMailPhysicalCheckRequest from a dict
originate_check_payment_mail_physical_check_request_from_dict = OriginateCheckPaymentMailPhysicalCheckRequest.from_dict(originate_check_payment_mail_physical_check_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


