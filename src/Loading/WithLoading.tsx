import * as React from 'react';
import { connect } from 'react-redux';

interface WithLoadingProps {
  loading?: boolean;
}

type StateProps = {
  app: {
    loading: boolean;
  };
};

export function withLoading<P extends WithLoadingProps>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
): React.ComponentClass<P> {
  class WrappedComponent extends React.Component<P & { dispatch?: () => void }> {
    public render() {
      return (
        <>
          <Comp {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = ({ app: { loading } }: StateProps) => ({
    loading,
  });

  return connect(mapStateToProps)(WrappedComponent);
}

export default withLoading;
