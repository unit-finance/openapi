# UpdateCustomer200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListCustomers200ResponseDataInner**](ListCustomers200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_customer200_response import UpdateCustomer200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomer200Response from a JSON string
update_customer200_response_instance = UpdateCustomer200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomer200Response.to_json())

# convert the object into a dict
update_customer200_response_dict = update_customer200_response_instance.to_dict()
# create an instance of UpdateCustomer200Response from a dict
update_customer200_response_from_dict = UpdateCustomer200Response.from_dict(update_customer200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


