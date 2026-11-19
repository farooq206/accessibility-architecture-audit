# UMANG Website Accessibility Audit

## 1. Website Information

- **Website:** UMANG
- **Website URL:** https://web.umang.gov.in/
- **Tested page:** Haryana Police Department page
- **Audit tool:** Lighthouse
- **Manual testing:** Keyboard-only navigation

## 2. Lighthouse Results

| Category       | Score |

| Performance    | 43    |
| Accessibility  | 81    |
| Best Practices | 92    |
| SEO            | 92    |

**Note:** These scores are from the second Lighthouse test. Scores may vary between runs.

## 3. Keyboard-Only Accessibility Testing

The website was tested using keyboard navigation without relying on mouse interaction.

| Test                    | Observation                                    | Result            |

| Visible focus indicator | Focus highlighting was not sufficiently clear. | Needs Improvement |
| Tab order               | Focus moved in a logical sequence.             | Pass              |
| Button accessibility    | All tested buttons were reachable.             | Pass              |
| Enter key               | Successfully activated the tested control.     | Pass              |
| Shift + Tab             | Successfully moved focus backwards.            | Pass              |

## 4. Identified Accessibility Issues

### Issue 1: Unclear Keyboard Focus Indicator

- **WCAG Reference:** 2.4.7 – Focus Visible
- **Evidence:** Manual keyboard navigation test.
- **Severity:** Medium
- **User Impact:** Keyboard users may struggle to identify which element currently has focus.
- **Recommended Fix:** Provide a clearly visible focus outline with sufficient contrast.

### Issue 2: Buttons Without Accessible Names

- **WCAG Reference:** 4.1.2 – Name, Role, Value
- **Evidence:** Lighthouse accessibility findings.
- **Severity:** High
- **User Impact:** Screen reader users may not understand the purpose of affected buttons.
- **Recommended Fix:** Give each affected button a meaningful accessible name using visible text or an appropriate accessible label.

### Issue 3: Positive Tabindex Values

- **WCAG Reference:** 2.4.3 – Focus Order
- **Evidence:** Lighthouse identified tabindex values greater than zero.
- **Severity:** Medium
- **User Impact:** Positive tabindex values can create an unexpected keyboard focus sequence.
- **Recommended Fix:** Prefer the natural document order and use tabindex="0" or tabindex="-1" only when appropriate.

### Issue 4: Non-Sequential Heading Levels

- **WCAG Reference:** 1.3.1 – Info and Relationships
- **Evidence:** Lighthouse identified heading levels that do not follow a sequential structure.
- **Severity:** Medium
- **User Impact:** Screen reader users may find the page structure harder to understand.
- **Recommended Fix:** Organize headings in a meaningful hierarchy.

### Issue 5: Touch Targets With Insufficient Size or Spacing

- **WCAG Reference:** 2.5.8 – Target Size (Minimum)
- **Evidence:** Lighthouse additional findings.
- **Severity:** Medium
- **User Impact:** Users with motor or dexterity difficulties may struggle to activate small or closely spaced controls.
- **Recommended Fix:** Provide sufficiently large and appropriately spaced interactive targets.

**Note:** The five findings above are based on the Lighthouse and manual observations recorded during this audit. The detailed affected elements should be inspected before implementation or final remediation.

## 5. Additional Lighthouse Findings

Another finding observed during the audit was the absence of a main landmark.

A main landmark helps assistive technology users identify and navigate to the primary content of a page.

This finding should be investigated further to determine the appropriate remediation.

## 6. Conclusion

The UMANG website audit identified opportunities to improve keyboard accessibility, accessible naming, heading structure, and interactive target usability.

The Lighthouse accessibility score was 81. Manual keyboard testing showed that navigation order was logical, but the visible focus indicator needed improvement.

This audit provides a starting point for understanding accessibility challenges and planning a maintainable web application foundation.