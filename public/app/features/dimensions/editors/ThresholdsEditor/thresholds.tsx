import React from 'react';

import { StandardEditorProps, ThresholdsConfig, ThresholdsMode, ThresholdsFieldConfigSettings } from '@grafana/data';

import { ThresholdsEditor } from './ThresholdsEditor';

type Props = StandardEditorProps<ThresholdsConfig, ThresholdsFieldConfigSettings>;

export class ThresholdsValueEditor extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { onChange, options } = this.props;
    let value = this.props.value;
    if (!value) {
      value = {
        options: options,
        mode: ThresholdsMode.Percentage,

        // Must be sorted by 'value', first value is always -Infinity
        steps: [
          // anything?
        ],
      };
    }

    return <ThresholdsEditor thresholds={value} onChange={onChange} options={options} />;
  }
}
