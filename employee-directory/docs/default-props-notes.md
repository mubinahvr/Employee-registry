# Default Props Notes

Default parameter values are useful when a component may receive missing optional props. `EmployeeBio` uses `bio = "Bio not available"` and `experience = "Experience not specified"`. This allows the component to render useful fallback content without requiring every caller to provide those values. Defaults are appropriate for optional information, while required information should still be supplied by the parent.
