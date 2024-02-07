import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const dispatch = useDispatch();
  const { data, error, loading } = useTypedSelector((state) => state.packages);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // dispatch(actionCreators.searchPackages(term));
    actionCreators.searchPackages(term)(dispatch);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Package Search</h1>
      <form onSubmit={onSubmit} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button style={{ padding: '8px 16px', borderRadius: '4px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Search</button>
      </form>
      {error && <h4 style={{ color: "red", textAlign: 'center' }}>{error}</h4>}
      {loading && <h4 style={{ textAlign: 'center' }}>Loading...</h4>}
      {data && !loading && data.map((name, i) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default PackagesList;
