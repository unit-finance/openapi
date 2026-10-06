# StatementAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **str** | Period of the statement, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. | 

## Example

```python
from unit_finance_sdk.models.statement_attributes import StatementAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of StatementAttributes from a JSON string
statement_attributes_instance = StatementAttributes.from_json(json)
# print the JSON string representation of the object
print(StatementAttributes.to_json())

# convert the object into a dict
statement_attributes_dict = statement_attributes_instance.to_dict()
# create an instance of StatementAttributes from a dict
statement_attributes_from_dict = StatementAttributes.from_dict(statement_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


