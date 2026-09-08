# UpdateIndividualCustomerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateIndividualCustomerData**](UpdateIndividualCustomerData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_individual_customer_request import UpdateIndividualCustomerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIndividualCustomerRequest from a JSON string
update_individual_customer_request_instance = UpdateIndividualCustomerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateIndividualCustomerRequest.to_json())

# convert the object into a dict
update_individual_customer_request_dict = update_individual_customer_request_instance.to_dict()
# create an instance of UpdateIndividualCustomerRequest from a dict
update_individual_customer_request_from_dict = UpdateIndividualCustomerRequest.from_dict(update_individual_customer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


