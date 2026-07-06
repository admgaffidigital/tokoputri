const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const targetStr = `            gOrds[idx].payment.tempoBalance = 0;
            gOrds[idx].status = 'Selesai';
        }
        window.rAdmPiutang(); 
    } catch (e) {
        showToast('Gagal melunasi tagihan: ' + e.message);
    }
};`;

const newStr = `            gOrds[idx].payment.tempoBalance = 0;
            gOrds[idx].status = 'Selesai';
        }
        window.rAdmPiutang(); 
    } catch (e) {
        showToast('Gagal melunasi tagihan: ' + e.message);
    }
    });
};`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, newStr);
    fs.writeFileSync('index.html', content);
    console.log('Fixed markTempoPaid');
} else {
    // try the one with catch(e)
    const targetStr2 = `            gOrds[idx].payment.tempoBalance = 0;
            gOrds[idx].status = 'Selesai';
        }
        window.rAdmPiutang(); 
    } catch(e) {
        showToast('Gagal mengubah status: ' + e.message);
    }
};`;
    const newStr2 = `            gOrds[idx].payment.tempoBalance = 0;
            gOrds[idx].status = 'Selesai';
        }
        window.rAdmPiutang(); 
    } catch(e) {
        showToast('Gagal mengubah status: ' + e.message);
    }
    });
};`;
    if (content.includes(targetStr2)) {
        content = content.replace(targetStr2, newStr2);
        fs.writeFileSync('index.html', content);
        console.log('Fixed markTempoPaid (target2)');
    } else {
        console.log('Not found');
    }
}
