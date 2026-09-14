# UpdateCheckDepositRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateData**](UpdateData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_check_deposit_request import UpdateCheckDepositRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCheckDepositRequest from a JSON string
update_check_deposit_request_instance = UpdateCheckDepositRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCheckDepositRequest.to_json())

# convert the object into a dict
update_check_deposit_request_dict = update_check_deposit_request_instance.to_dict()
# create an instance of UpdateCheckDepositRequest from a dict
update_check_deposit_request_from_dict = UpdateCheckDepositRequest.from_dict(update_check_deposit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


