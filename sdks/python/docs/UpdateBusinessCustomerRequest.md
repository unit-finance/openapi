# UpdateBusinessCustomerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateBusinessCustomerData**](UpdateBusinessCustomerData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_customer_request import UpdateBusinessCustomerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessCustomerRequest from a JSON string
update_business_customer_request_instance = UpdateBusinessCustomerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessCustomerRequest.to_json())

# convert the object into a dict
update_business_customer_request_dict = update_business_customer_request_instance.to_dict()
# create an instance of UpdateBusinessCustomerRequest from a dict
update_business_customer_request_from_dict = UpdateBusinessCustomerRequest.from_dict(update_business_customer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


