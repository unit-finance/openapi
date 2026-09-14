# CreateCheckDepositRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCheckDepositData**](CreateCheckDepositData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_deposit_request import CreateCheckDepositRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckDepositRequest from a JSON string
create_check_deposit_request_instance = CreateCheckDepositRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCheckDepositRequest.to_json())

# convert the object into a dict
create_check_deposit_request_dict = create_check_deposit_request_instance.to_dict()
# create an instance of CreateCheckDepositRequest from a dict
create_check_deposit_request_from_dict = CreateCheckDepositRequest.from_dict(create_check_deposit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


