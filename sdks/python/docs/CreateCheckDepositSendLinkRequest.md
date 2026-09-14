# CreateCheckDepositSendLinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCheckDepositSendLinkData**](CreateCheckDepositSendLinkData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_deposit_send_link_request import CreateCheckDepositSendLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckDepositSendLinkRequest from a JSON string
create_check_deposit_send_link_request_instance = CreateCheckDepositSendLinkRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCheckDepositSendLinkRequest.to_json())

# convert the object into a dict
create_check_deposit_send_link_request_dict = create_check_deposit_send_link_request_instance.to_dict()
# create an instance of CreateCheckDepositSendLinkRequest from a dict
create_check_deposit_send_link_request_from_dict = CreateCheckDepositSendLinkRequest.from_dict(create_check_deposit_send_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


