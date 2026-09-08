# UpdateBusinessCustomerOfficerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateBusinessCustomerOfficerData**](UpdateBusinessCustomerOfficerData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_customer_officer_request import UpdateBusinessCustomerOfficerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessCustomerOfficerRequest from a JSON string
update_business_customer_officer_request_instance = UpdateBusinessCustomerOfficerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessCustomerOfficerRequest.to_json())

# convert the object into a dict
update_business_customer_officer_request_dict = update_business_customer_officer_request_instance.to_dict()
# create an instance of UpdateBusinessCustomerOfficerRequest from a dict
update_business_customer_officer_request_from_dict = UpdateBusinessCustomerOfficerRequest.from_dict(update_business_customer_officer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


