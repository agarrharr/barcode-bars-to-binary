import test from 'ava';
import m from './';

test(t => {
	t.is(m('1'), '1');
	t.is(m('11132111231222132113211321111111321122212122123122211312111'), '10100011010110001001100100011010001101000110101010111001011001101101100100111011001101000100101');
});