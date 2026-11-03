# LendingProgram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the lending program, e.g. bankSponsoredChargeCardProgram, clientSponsoredChargeCardProgram or receivablesRetentionProgram. | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**LendingProgramAttributes**](LendingProgramAttributes.md) |  | [default to undefined]

## Example

```typescript
import { LendingProgram } from '@unit-finance/unit-openapi-node-sdk';

const instance: LendingProgram = {
    type,
    id,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
