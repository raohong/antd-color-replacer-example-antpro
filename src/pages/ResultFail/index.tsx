import { Button, Card, Icon, Result } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Fragment } from 'react';

import { GridContent } from '@ant-design/pro-layout';
import styles from './index.less';

const Content = (
  <Fragment>
    <div className={styles.title}>
      <FormattedMessage
        id="resultfail.error.hint-title"
        defaultMessage="The content you submitted has the following error:"
      />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Icon style={{ marginRight: 8 }} className={styles.error_icon} type="close-circle-o" />
      <FormattedMessage
        id="resultfail.error.hint-text1"
        defaultMessage="Your account has been frozen"
      />
      <a style={{ marginLeft: 16 }}>
        <FormattedMessage id="resultfail.error.hint-btn1" defaultMessage="Thaw immediately" />
        <Icon type="right" />
      </a>
    </div>
    <div>
      <Icon style={{ marginRight: 8 }} className={styles.error_icon} type="close-circle-o" />
      <FormattedMessage
        id="resultfail.error.hint-text2"
        defaultMessage="Your account is not yet eligible to apply"
      />
      <a style={{ marginLeft: 16 }}>
        <FormattedMessage id="resultfail.error.hint-btn2" defaultMessage="Upgrade immediately" />
        <Icon type="right" />
      </a>
    </div>
  </Fragment>
);

export default () => (
  <GridContent>
    <Card bordered={false}>
      <Result
        status="error"
        title={formatMessage({ id: 'resultfail.error.title' })}
        subTitle={formatMessage({ id: 'resultfail.error.description' })}
        extra={
          <Button type="primary">
            <FormattedMessage id="resultfail.error.btn-text" defaultMessage="Return to modify" />
          </Button>
        }
        style={{ marginTop: 48, marginBottom: 16 }}
      >
        {Content}
      </Result>
    </Card>
  </GridContent>
);
